import * as Path from 'node:path'
import express from 'express'

import employees from './routes/employees.ts'
import sales from './routes/sales.ts'

const server = express()
server.use(express.json())

server.use('/api/v1/employees', employees)
server.use('/api/v1/sales', sales)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))


if (process.env.NODE_ENV === 'production') {
    server.use(express.static(Path.resolve('public')))
    server.use('/assets', express.static(Path.resolve('./dist/assets')))  
    server.get('*', (req, res) => {
      res.sendFile(Path.resolve('./dist/index.html'))
    })
  }

export default server
