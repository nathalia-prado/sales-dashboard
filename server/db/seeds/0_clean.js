export const seed = (knex) => {
  // Deletes ALL existing entries
  return knex('rates').del()
    .then(() => knex('employees').del())
    .then(() => knex('sales').del())
}