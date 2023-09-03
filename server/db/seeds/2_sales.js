export const seed = (knex) => {
  return knex('sales').insert([
    {
      id: 1,
      total: 554.00,
      employee_id: 1,
      rate: 4,
      date_order: new Date(2023, 7, 20, 6, 20, 0)
    },
    {
      id: 2,
      total: 690.30,
      employee_id: 2,
      rate: 3,
      date_order: new Date(2023, 7, 21, 7, 30, 0)
    },
    {
      id: 3,
      total: 240.00,
      employee_id: 2,
      rate: 5,
      date_order: new Date(2023, 7, 21, 4, 40, 0)
    },
    {
      id: 4,
      total: 320.00,
      employee_id: 3,
      rate: 2,
      date_order: new Date(2023, 7, 19, 8, 10, 0)
    },
    {
      id: 5,
      total: 600.00,
      employee_id: 3,
      rate: 3,
      date_order: new Date(2023, 7, 18, 7, 10, 0)
    },
    {
      id: 6,
      total: 700.00,
      employee_id: 3,
      rate: 1,
      date_order: new Date(2023, 7, 17, 6, 10, 0)
    },
    {
      id: 7,
      total: 920.00,
      employee_id: 4,
      rate: 2,
      date_order: new Date(2023, 7, 25, 9, 23, 0)
    },
    {
      id: 8,
      total: 650.00,
      employee_id: 4,
      rate: 3,
      date_order: new Date(2023, 7, 24, 8, 23, 0)
    },
    {
      id: 9,
      total: 356.00,
      employee_id: 4,
      rate: 4,
      date_order: new Date(2023, 7, 23, 5, 23, 0)
    },
  ])
}
