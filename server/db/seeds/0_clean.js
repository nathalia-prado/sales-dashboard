export const seed = (knex) => {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(() => knex('sales').del())
}