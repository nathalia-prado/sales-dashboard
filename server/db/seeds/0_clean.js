export const seed = (knex) => {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(() => knex('employees').del())
}