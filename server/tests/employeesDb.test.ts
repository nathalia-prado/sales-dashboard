import * as db from '../db/employeesDb.js'
import * as salesDb from '../db/salesDb.js'
import {describe, it, expect, beforeAll, beforeEach, afterAll} from 'vitest'
import connection from '../db/connection.js'

beforeAll(() => {
    return connection.migrate.latest()
})

beforeEach(() => {
    return connection.seed.run()
})

describe('getAllEmployees', () => {
    it('Test get all employees', async () => {
        const allEmployees = await db.getAllEmployees()
        expect(allEmployees.length).toBe(4)
    })
})

describe('addSale', () => {
    it('test adding a new sale', async () => {
        const date = new Date()
        const newSale = {
            total: 30,
            employeeId: 1,
            rate: 3,
            dateOrder: date.getTime()
        }

        await db.addSale(newSale)
        // check if the test was added
        const allSales = await salesDb.getAllSales()
        expect(allSales.length).toBe(10)
    })
})

afterAll(() => {
  connection.destroy()
})