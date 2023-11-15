import type { CommentUserVote } from '@prisma/client'

import {
  commentUserVotes,
  commentUserVote,
  createCommentUserVote,
  updateCommentUserVote,
  deleteCommentUserVote,
} from './commentUserVotes'
import type { StandardScenario } from './commentUserVotes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('commentUserVotes', () => {
  scenario(
    'returns all commentUserVotes',
    async (scenario: StandardScenario) => {
      const result = await commentUserVotes()

      expect(result.length).toEqual(
        Object.keys(scenario.commentUserVote).length
      )
    }
  )

  scenario(
    'returns a single commentUserVote',
    async (scenario: StandardScenario) => {
      const result = await commentUserVote({
        id: scenario.commentUserVote.one.id,
      })

      expect(result).toEqual(scenario.commentUserVote.one)
    }
  )

  scenario('creates a commentUserVote', async (scenario: StandardScenario) => {
    const result = await createCommentUserVote({
      input: {
        commentId: scenario.commentUserVote.two.commentId,
        userId: scenario.commentUserVote.two.userId,
      },
    })

    expect(result.commentId).toEqual(scenario.commentUserVote.two.commentId)
    expect(result.userId).toEqual(scenario.commentUserVote.two.userId)
  })

  scenario('updates a commentUserVote', async (scenario: StandardScenario) => {
    const original = (await commentUserVote({
      id: scenario.commentUserVote.one.id,
    })) as CommentUserVote
    const result = await updateCommentUserVote({
      id: original.id,
      input: { commentId: scenario.commentUserVote.two.commentId },
    })

    expect(result.commentId).toEqual(scenario.commentUserVote.two.commentId)
  })

  scenario('deletes a commentUserVote', async (scenario: StandardScenario) => {
    const original = (await deleteCommentUserVote({
      id: scenario.commentUserVote.one.id,
    })) as CommentUserVote
    const result = await commentUserVote({ id: original.id })

    expect(result).toEqual(null)
  })
})
