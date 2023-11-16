// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  userByNickname: {
    favorites: [
      {
        __typename: 'FavoriteLinkUser',
        link: {
          __typename: 'Link',
          id: 'c1cd3093-305f-46c7-bbb2-987052436fdf',
          title:
            'leakage: browser-based timerless speculative execution attacks on apple dEvices',
          submittedBy: {
            __typename: 'User',
            lastName: 'Dutton',
            nickname: 'selfteachme',
            firstName: 'Amy',
          },
          link: 'https://google.com',
          countVotes: 1,
          countComments: 0,
          currentUserVote: null,
          createdAt: '2023-11-14T21:38:51.166Z',
          updatedAt: '2023-11-14T21:38:35.468Z',
          currentUserFavorite: false,
        },
      },
      {
        __typename: 'FavoriteLinkUser',
        link: {
          __typename: 'Link',
          id: '1e8665a9-c845-480a-92d4-173825cc019b',
          title: 'Apple',
          submittedBy: {
            __typename: 'User',
            lastName: 'Dutton',
            nickname: 'selfteachme',
            firstName: 'Amy',
          },
          link: 'https://apple.com',
          countVotes: 1,
          countComments: 14,
          currentUserVote: null,
          createdAt: '2023-11-14T22:29:17.845Z',
          updatedAt: '2023-11-14T22:29:04.820Z',
          currentUserFavorite: false,
        },
      },
    ],
  },
})
