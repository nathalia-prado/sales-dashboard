export const up = (knex) => {
  return knex.schema.createTable('sales', (table) => {
    table.increments().primary()
    table.decimal('total').notNullable()
    table.datetime('date_order').notNullable()
    table.integer('rate').notNullable()
    table.integer('employee_id').references('employees.id')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('sales')
}
