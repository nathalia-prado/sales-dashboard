export interface Sale {
  id?: number
  total: number
  employeeName?: string
  rate: number
  dateOrder: number
}
export interface NewSale extends Sale {
  employeeId: number
}