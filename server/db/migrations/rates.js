export const up = (knex) => {
  return knex.schema.createTable('rates', (table) => {
    table.increments().primary()
    table.integer('rate').notNullable()
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('rates')
}
