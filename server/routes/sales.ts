import express from 'express'
import * as db from '../db/salesDb'

const router = express.Router()

router.get('/', async (req, res) => {
    const sales = await db.getAllSales()
    res.json(sales)
})

export default router

