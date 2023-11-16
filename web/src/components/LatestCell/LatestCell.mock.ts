// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  linksByRecent: [
    {
      id: '1',
      title: 'RedwoodJS',
      submittedBy: {
        lastName: 'Dutton',
        nickname: 'selfteachme',
        firstName: 'Amy',
      },
      link: 'https://redwoodjs.com',
      countVotes: 13,
      countComments: 26,
      currentUserVote: 'UP',
      createdAt: '2020-07-29T00:00:00.000Z',
      updatedAt: '2020-07-29T00:00:00.000Z',
      currentUserFavorite: true,
    },
    {
      id: '2',
      title: 'RedwoodJS Docs',
      submittedBy: {
        lastName: 'Dutton',
        nickname: 'selfteachme',
        firstName: 'Amy',
      },
      link: 'https://redwoodjs.com/docs',
      countVotes: 13,
      countComments: 26,
      currentUserVote: 'UP',
      createdAt: '2020-07-29T00:00:00.000Z',
      updatedAt: '2020-07-29T00:00:00.000Z',
      currentUserFavorite: true,
    },
  ],
})
