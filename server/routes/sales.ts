import express from 'express'
import * as db from '../db/salesDb'

const router = express.Router()

router.get('/', async (req, res) => {
    const sales = await db.getAllSales()
    res.json(sales)
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    await db.deleteSale(id)
    res.sendStatus(200)
})

export default router

