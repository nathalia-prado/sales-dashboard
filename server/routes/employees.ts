import express from 'express'
import * as db from '../db/employeesDb'

const router = express.Router()

router.get('/', async (req, res) => {
    const employees = await db.getAllEmployees()
    res.json(employees)
})

router.post('/:id/sales', async (req, res) => {
    const { rate, total } = req.body
    const newSale = { employeeId: Number(req.params.id), rate: rate, total: total }
    const sales = await db.addSale(newSale)
    res.json(sales)
})



export default router

