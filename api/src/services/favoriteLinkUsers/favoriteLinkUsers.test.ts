import type { FavoriteLinkUser } from '@prisma/client'

import {
  favoriteLinkUsers,
  favoriteLinkUser,
  createFavoriteLinkUser,
  updateFavoriteLinkUser,
  deleteFavoriteLinkUser,
} from './favoriteLinkUsers'
import type { StandardScenario } from './favoriteLinkUsers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('favoriteLinkUsers', () => {
  scenario(
    'returns all favoriteLinkUsers',
    async (scenario: StandardScenario) => {
      const result = await favoriteLinkUsers()

      expect(result.length).toEqual(
        Object.keys(scenario.favoriteLinkUser).length
      )
    }
  )

  scenario(
    'returns a single favoriteLinkUser',
    async (scenario: StandardScenario) => {
      const result = await favoriteLinkUser({
        id: scenario.favoriteLinkUser.one.id,
      })

      expect(result).toEqual(scenario.favoriteLinkUser.one)
    }
  )

  scenario('creates a favoriteLinkUser', async (scenario: StandardScenario) => {
    const result = await createFavoriteLinkUser({
      input: {
        userId: scenario.favoriteLinkUser.two.userId,
        linkId: scenario.favoriteLinkUser.two.linkId,
        updatedAt: '2023-11-08T22:16:52.281Z',
      },
    })

    expect(result.userId).toEqual(scenario.favoriteLinkUser.two.userId)
    expect(result.linkId).toEqual(scenario.favoriteLinkUser.two.linkId)
    expect(result.updatedAt).toEqual(new Date('2023-11-08T22:16:52.281Z'))
  })

  scenario('updates a favoriteLinkUser', async (scenario: StandardScenario) => {
    const original = (await favoriteLinkUser({
      id: scenario.favoriteLinkUser.one.id,
    })) as FavoriteLinkUser
    const result = await updateFavoriteLinkUser({
      id: original.id,
      input: { updatedAt: '2023-11-09T22:16:52.281Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-11-09T22:16:52.281Z'))
  })

  scenario('deletes a favoriteLinkUser', async (scenario: StandardScenario) => {
    const original = (await deleteFavoriteLinkUser({
      id: scenario.favoriteLinkUser.one.id,
    })) as FavoriteLinkUser
    const result = await favoriteLinkUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
