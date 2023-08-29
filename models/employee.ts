export interface EmployeeData {
  id: number
  name: number
  email: string
}

export interface Employee extends EmployeeData {
  jobTitle: string
  dateHired: number
}