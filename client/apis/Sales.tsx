import request from "superagent";
import { Sale } from "../../models/sale";

export async function getAllSales(): Promise<Sale[]> {
    const response = await request.get('api/v1/sales')
    return response.body
}