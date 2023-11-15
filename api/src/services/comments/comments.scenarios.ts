import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        body: 'String',
        updatedAt: '2023-11-08T22:17:01.187Z',
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-08T22:17:01.187Z',
            submittedBy: {
              create: {
                email: 'String7065720',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        author: {
          create: {
            email: 'String7980362',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        body: 'String',
        updatedAt: '2023-11-08T22:17:01.187Z',
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-08T22:17:01.187Z',
            submittedBy: {
              create: {
                email: 'String3025447',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        author: {
          create: {
            email: 'String1086893',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
