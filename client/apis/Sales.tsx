import request from "superagent";
import { Sale } from "../../models/sale";

export async function getAllSales(): Promise<Sale[]> {
    const response = await request.get('api/v1/sales')
    return response.body
}

export async function deleteSale(saleId: number): Promise<unknown> {
    const response = await request.del(`/api/v1/sales/${saleId}`)
    return response.statusCode
}