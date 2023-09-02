export const seed = (knex) => {
  return knex('employees').insert([
    {
      id: 1,
      name: 'Nick',
      email: 'nick@nick.com',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 2,
      name: 'Jack',
      email: 'jack@jack.com',
      photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 3,
      name: 'Sarah',
      email: 'sarah@sarah.com',
      photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
    {
      id: 4,
      name: 'Rachel',
      email: 'rachel@rachel.com',
      photo: 'https://images.unsplash.com/photo-1578774296842-c45e472b3028',
      job_title: 'Sales Assistant',
      date_hired: new Date(2023, 1, 15)
    },
  ])
}
