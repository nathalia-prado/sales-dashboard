import request from "superagent";
import { EmployeeData } from "../../models/employee";
import { NewSale } from "../../models/sale";
import { Sale } from "../components/SalesModal";

export async function getAllEmployees(): Promise<EmployeeData[]> {
    const response = await request.get('api/v1/employees')
    return response.body
}

export async function addSale(sale: NewSale): Promise<Sale[]> {
    const response = await request.post(`api/v1/employees/${sale.employeeId}/sales`).send(sale)
    return response.body
}