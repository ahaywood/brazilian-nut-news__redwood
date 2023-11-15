import type { Prisma, CommentUserVote } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentUserVoteCreateArgs>({
  commentUserVote: {
    one: {
      data: {
        comment: {
          create: {
            body: 'String',
            updatedAt: '2023-11-08T22:17:08.991Z',
            link: {
              create: {
                title: 'String',
                link: 'String',
                updatedAt: '2023-11-08T22:17:08.991Z',
                submittedBy: {
                  create: {
                    email: 'String4262814',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            author: {
              create: {
                email: 'String1756210',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String3125490',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        comment: {
          create: {
            body: 'String',
            updatedAt: '2023-11-08T22:17:08.991Z',
            link: {
              create: {
                title: 'String',
                link: 'String',
                updatedAt: '2023-11-08T22:17:08.991Z',
                submittedBy: {
                  create: {
                    email: 'String5279630',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            author: {
              create: {
                email: 'String1828263',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String6636818',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CommentUserVote, 'commentUserVote'>
