export const up = (knex) => {
  return knex.schema.createTable('employees', (table) => {
    table.increments().primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('photo').notNullable()
    table.string('job_title').notNullable()
    table.date('date_hired').notNullable()
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('employees')
}
