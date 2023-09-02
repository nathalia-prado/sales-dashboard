export interface EmployeeData {
  id: number
  name: string
  email: string
  photo: string
}

export interface Employee extends EmployeeData {
  jobTitle: string
  dateHired: number
}