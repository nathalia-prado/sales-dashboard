import { EmployeeData } from "../../../models/employee";
import { Sale } from "../../../models/sale";

export interface RateData {
    employeeName: string,
    employeePhoto: string,
    averageRate: number
}

const useRateData = ({ sales, employees} : {sales: Sale[] | null, employees: EmployeeData[] | null, }) => {
    let rateData: Array<RateData> = []
    if (sales && employees) {
        rateData = employees.map(employee => {
            const employeeSales = sales.filter(sale => sale.employeeName === employee.name)
            const employeeRates = employeeSales.map(employeeSale => employeeSale.rate)
            return { 
                employeeName: employee.name,
                employeePhoto: employee.photo,
                averageRate: employeeRates.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / employeeRates.length
            }
        })
    }
    return rateData
}

export default useRateData