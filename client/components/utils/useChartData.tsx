import { EmployeeData } from "../../../models/employee";
import { Sale } from "../../../models/sale";

export interface ChartData {
    employeeName: string,
    sales: number
}

const useChartData = ({ sales, employees} : {sales: Sale[] | null, employees: EmployeeData[] | null, }) => {
    let chartData: Array<ChartData> = []
    if (sales && employees) {
        chartData = employees.map(employee => {
            const employeeSales = sales.filter(sale => sale.employeeName === employee.name)
            return { 
                employeeName: employee.name, 
                sales: employeeSales.length
            }
        })
    }
    return chartData
}

export default useChartData