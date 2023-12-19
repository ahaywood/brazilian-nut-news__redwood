import { render, screen } from '@redwoodjs/testing/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

function componentWrappedInRedwoodProviders(
  children:
    | string
    | number
    | boolean
    | React.JSX.Element
    | Iterable<React.ReactNode>
) {
  return <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
}

describe('SharedLink', () => {
  beforeEach(() => {
    mockGraphQLMutation('VoteMutation', (variables, { ctx }) => {
      ctx.delay(1500) // pause for 1.5 seconds
      return {
        data: {
          upsertVoteForLink: {
            id: 42,
          },
        },
      }
    })

    mockGraphQLMutation('RemoveVoteMutation', (variables, { ctx }) => {
      ctx.delay(1500) // pause for 1.5 seconds
      return {
        data: {
          deleteVoteForLink: {
            id: 42,
          },
        },
      }
    })

    mockGraphQLMutation('FavoriteMutation', (variables, { ctx }) => {
      ctx.delay(1500) // pause for 1.5 seconds
      return {
        data: {
          createFavoriteLinkUser: {
            id: 42,
          },
        },
      }
    })

    mockGraphQLMutation('RemoveFavoriteMutation', (variables, { ctx }) => {
      ctx.delay(1500) // pause for 1.5 seconds
      return {
        data: {
          deleteFavoriteLinkUserByLinkUserId: {
            id: 42,
          },
        },
      }
    })
  })

  it('renders successfully', () => {
    expect(() => {
      render(
        componentWrappedInRedwoodProviders(
          <SharedLink
            id="1"
            numberOfComments={13}
            submittedBy={{
              firstName: 'Amy',
              lastName: 'Dutton',
              nickname: 'selfteachme',
            }}
            title="RedwoodJS Docs"
            url="https://redwoodjs.com/docs"
            countVotes={60}
            currentUserVote="UP"
            lastUpdated="2023-11-14T22:29:17.845Z"
            favorited={true}
          />
        )
      )
    }).not.toThrow()
  })

  it('renders the title', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('RedwoodJS Docs')).toBeInTheDocument()
  })

  it('renders the number of comments', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('13 comments')).toBeInTheDocument()
  })

  it('renders the name of the person who submitted the link', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('Amy Dutton')).toBeInTheDocument()
  })

  it('links to the profile of the person who submitted link', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('Amy Dutton')).toHaveAttribute(
      'href',
      '/profile/selfteachme'
    )
  })

  it('links out to the shared url', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByTestId('sharedLinkUrl')).toHaveAttribute(
      'href',
      'https://redwoodjs.com/docs'
    )
  })

  it('displays the last updated date', () => {
    // Set the test date to "December 18, 2023"
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2023-12-18T00:00:00Z'))

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    const regex = /about 1 month ago/i
    expect(
      screen.getByText((content, node) => {
        const hasText = (node) => node.textContent.match(regex)
        if (node) {
          return (
            hasText(node) &&
            Array.from(node.children).every((child) => !hasText(child))
          )
        }
      })
    ).toBeInTheDocument()

    // Clean up
    jest.useRealTimers()
  })

  it('renders the number of votes', () => {
    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('60 points')).toBeInTheDocument()
  })

  it('shows a link as favorited', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.getByText('Favorited')).toBeInTheDocument()
  })

  it('shows a link as not favorited', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={false}
        />
      )
    )
    expect(screen.getByText('Mark as favorite')).toBeInTheDocument()
  })

  it('hides the vote buttons when the user is no logged in', () => {
    // need to explicitly set the currentUser to null otherwise it will maintain
    // the current user from the previous test.
    mockCurrentUser(null)

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    expect(screen.queryByTestId('voteUpButton')).not.toBeInTheDocument()
  })

  it.skip('displays the default state as voted up', () => {})
  it.skip('displays the default state as voted down', () => {})

  it.skip('can vote up when logged in', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    // expect(screen.getByText('Favorited')).toBeInTheDocument()
  })

  it.skip('can vote down when logged in', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    // expect(screen.getByText('Favorited')).toBeInTheDocument()
  })

  it.skip('can mark as a favorite logged in', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    // expect(screen.getByText('Favorited')).toBeInTheDocument()
  })

  it.skip('can unfavorite when logged in', () => {
    mockCurrentUser({ name: 'Rob' })

    render(
      componentWrappedInRedwoodProviders(
        <SharedLink
          id="1"
          numberOfComments={13}
          submittedBy={{
            firstName: 'Amy',
            lastName: 'Dutton',
            nickname: 'selfteachme',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2023-11-14T22:29:17.845Z"
          favorited={true}
        />
      )
    )
    // expect(screen.getByText('Favorited')).toBeInTheDocument()
  })
})
