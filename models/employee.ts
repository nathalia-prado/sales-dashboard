export interface EmployeeData {
  name: number
  email: string
}

export interface Employee extends EmployeeData {
  id: number
  job_title: string
  dateHired: number
}