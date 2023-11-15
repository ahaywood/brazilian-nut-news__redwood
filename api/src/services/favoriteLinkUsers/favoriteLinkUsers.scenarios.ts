import type { Prisma, FavoriteLinkUser } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FavoriteLinkUserCreateArgs>({
  favoriteLinkUser: {
    one: {
      data: {
        updatedAt: '2023-11-08T22:16:52.302Z',
        user: {
          create: {
            email: 'String3901602',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-08T22:16:52.302Z',
            submittedBy: {
              create: {
                email: 'String5346136',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-11-08T22:16:52.302Z',
        user: {
          create: {
            email: 'String3978818',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        link: {
          create: {
            title: 'String',
            link: 'String',
            updatedAt: '2023-11-08T22:16:52.302Z',
            submittedBy: {
              create: {
                email: 'String4439697',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  FavoriteLinkUser,
  'favoriteLinkUser'
>
