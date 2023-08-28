export const seed = (knex) => {
  return knex('sales').insert([
    {
      id: 1,
      total: 554.00,
      employee_id: 1,
      rate_id: 1,
      date_order: new Date(2023, 7, 20, 6, 20, 0)
    },
    {
      id: 2,
      total: 690.30,
      employee_id: 2,
      rate_id: 2,
      date_order: new Date(2023, 7, 21, 7, 30, 0)
    },
    {
      id: 3,
      total: 240.00,
      employee_id: 2,
      rate_id: 3,
      date_order: new Date(2023, 7, 21, 4, 40, 0)
    },
    {
      id: 4,
      total: 320.00,
      employee_id: 3,
      rate_id: 4,
      date_order: new Date(2023, 7, 19, 8, 10, 0)
    },
    {
      id: 5,
      total: 920.00,
      employee_id: 4,
      rate_id: 5,
      date_order: new Date(2023, 7, 25, 9, 23, 0)
    },
  ])
}
