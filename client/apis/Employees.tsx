import request from "superagent";
import { EmployeeData } from "../../models/employee";

export async function getAllEmployees(): Promise<EmployeeData[]> {
    const response = await request.get('api/v1/employees')
    return response.body
}