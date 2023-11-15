import type { Prisma, Link } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LinkCreateArgs>({
  link: {
    one: {
      data: {
        title: 'String',
        link: 'String',
        updatedAt: '2023-11-14T21:09:49.078Z',
        submittedBy: {
          create: {
            email: 'String2918937',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        link: 'String',
        updatedAt: '2023-11-14T21:09:49.078Z',
        submittedBy: {
          create: {
            email: 'String570324',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Link, 'link'>
