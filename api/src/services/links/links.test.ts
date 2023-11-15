import type { Link } from '@prisma/client'

import { links, link, createLink, updateLink, deleteLink } from './links'
import type { StandardScenario } from './links.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('links', () => {
  scenario('returns all links', async (scenario: StandardScenario) => {
    const result = await links()

    expect(result.length).toEqual(Object.keys(scenario.link).length)
  })

  scenario('returns a single link', async (scenario: StandardScenario) => {
    const result = await link({ id: scenario.link.one.id })

    expect(result).toEqual(scenario.link.one)
  })

  scenario('creates a link', async (scenario: StandardScenario) => {
    const result = await createLink({
      input: {
        title: 'String',
        link: 'String',
        submittedById: scenario.link.two.submittedById,
        updatedAt: '2023-11-14T21:09:49.067Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.link).toEqual('String')
    expect(result.submittedById).toEqual(scenario.link.two.submittedById)
    expect(result.updatedAt).toEqual(new Date('2023-11-14T21:09:49.067Z'))
  })

  scenario('updates a link', async (scenario: StandardScenario) => {
    const original = (await link({ id: scenario.link.one.id })) as Link
    const result = await updateLink({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a link', async (scenario: StandardScenario) => {
    const original = (await deleteLink({ id: scenario.link.one.id })) as Link
    const result = await link({ id: original.id })

    expect(result).toEqual(null)
  })
})
