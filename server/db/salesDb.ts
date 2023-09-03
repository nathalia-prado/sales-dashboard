
import { Sale } from '../../models/sale.ts'
import db from './connection.ts'

export function getAllSales(): Promise<Sale[]> {
  return db('sales')
        .join('employees', 'sales.employee_id', 'employees.id')
        .select(['sales.id as id', 'total','employees.name as employeeName', 'rate', 'date_order as dateOrder'])
        .orderBy('date_order', 'desc')
}
