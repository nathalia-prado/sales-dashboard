
import { EmployeeData } from '../../models/employee.ts'
import { NewSale, Sale } from '../../models/sale.ts'
import db from './connection.ts'

export function getAllEmployees(): Promise<EmployeeData[]> {
  return db('employees').select(['id', 'name','email', 'photo'])
}

export function addSale(saleData: NewSale): Promise<Sale[]> {
  return db('sales')
    .insert({total: saleData.total, employee_id: saleData.employeeId, rate: saleData.rate, date_order: saleData.dateOrder})
    .returning(['id','total','employee_id as employeeId', 'rate', 'date_order as dateOrder'])
}