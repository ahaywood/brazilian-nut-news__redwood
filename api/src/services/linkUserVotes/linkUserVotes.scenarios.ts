import type { Prisma, LinkUserVote } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LinkUserVoteCreateArgs>({
  linkUserVote: {
    one: {
      data: {
        direction: 'UP',
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-14T22:20:03.586Z',
            submittedBy: {
              create: {
                email: 'String9581002',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String1685957',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        direction: 'UP',
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-14T22:20:03.586Z',
            submittedBy: {
              create: {
                email: 'String8225574',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String8669939',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<LinkUserVote, 'linkUserVote'>
