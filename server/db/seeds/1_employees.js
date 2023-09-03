export const seed = (knex) => {
  return knex('employees').insert([
    {
      id: 1,
      name: 'Nick',
      email: 'nick@nick.com',
      photo: 'nick.jpg',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 2,
      name: 'Jack',
      email: 'jack@jack.com',
      photo: 'jack.jpg',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 3,
      name: 'Sarah',
      email: 'sarah@sarah.com',
      photo: 'sarah.jpg',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 4,
      name: 'Rachel',
      email: 'rachel@rachel.com',
      photo: 'rachel.jpg',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
  ])
}
