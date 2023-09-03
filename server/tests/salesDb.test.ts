import * as db from '../db/salesDb.js'
import {describe, it, expect, beforeAll, beforeEach, afterAll} from 'vitest'
import connection from '../db/connection.js'

beforeAll(() => {
    return connection.migrate.latest()
})

beforeEach(() => {
    return connection.seed.run()
})

describe('getAllSales', () => {
    it('Test get all sales', async () => {
        const allEmployees = await db.getAllSales()
        expect(allEmployees.length).toBe(9)
    })
})

afterAll(() => {
  connection.destroy()
})