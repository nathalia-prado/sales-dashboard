export const seed = (knex) => {
  return knex('rates').insert([
    {
      id: 1,
      rate: 3
    },
    {
      id: 2,
      rate: 4
    },
    {
      id: 3,
      rate: 3
    },
    {
      id: 4,
      rate: 5
    },
    {
      id: 5,
      rate: 2
    },
  ])
}
