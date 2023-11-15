import type { LinkUserVote } from '@prisma/client'

import {
  linkUserVotes,
  linkUserVote,
  createLinkUserVote,
  updateLinkUserVote,
  deleteLinkUserVote,
} from './linkUserVotes'
import type { StandardScenario } from './linkUserVotes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('linkUserVotes', () => {
  scenario('returns all linkUserVotes', async (scenario: StandardScenario) => {
    const result = await linkUserVotes()

    expect(result.length).toEqual(Object.keys(scenario.linkUserVote).length)
  })

  scenario(
    'returns a single linkUserVote',
    async (scenario: StandardScenario) => {
      const result = await linkUserVote({ id: scenario.linkUserVote.one.id })

      expect(result).toEqual(scenario.linkUserVote.one)
    }
  )

  scenario('creates a linkUserVote', async (scenario: StandardScenario) => {
    const result = await createLinkUserVote({
      input: {
        linkId: scenario.linkUserVote.two.linkId,
        userId: scenario.linkUserVote.two.userId,
        direction: 'UP',
      },
    })

    expect(result.linkId).toEqual(scenario.linkUserVote.two.linkId)
    expect(result.userId).toEqual(scenario.linkUserVote.two.userId)
    expect(result.direction).toEqual('UP')
  })

  scenario('updates a linkUserVote', async (scenario: StandardScenario) => {
    const original = (await linkUserVote({
      id: scenario.linkUserVote.one.id,
    })) as LinkUserVote
    const result = await updateLinkUserVote({
      id: original.id,
      input: { direction: 'DOWN' },
    })

    expect(result.direction).toEqual('DOWN')
  })

  scenario('deletes a linkUserVote', async (scenario: StandardScenario) => {
    const original = (await deleteLinkUserVote({
      id: scenario.linkUserVote.one.id,
    })) as LinkUserVote
    const result = await linkUserVote({ id: original.id })

    expect(result).toEqual(null)
  })
})
