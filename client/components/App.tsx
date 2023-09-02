
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SalesTable from "./SalesTable";
import Title from "./Title";
import { getAllSales } from "../apis/Sales";
import { Sale } from "../../models/sale";
import Chart from "./Chart";
import { EmployeeData } from "../../models/employee";
import { getAllEmployees } from "../apis/Employees";
import Rate from "./Rate";

function App() {

  const [sales, setSales] = useState<Sale[] | null>(null)
  const [employees, setEmployees] = useState<EmployeeData[] | null>(null)

  useEffect(() => {

    async function fetchSalesAndEmployees() {
      const salesData = await getAllSales()
      setSales(salesData)

      const employeesData = await getAllEmployees()
      setEmployees(employeesData)
    }

    try {
      fetchSalesAndEmployees()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Title>Sales Dashboard</Title>
        <button className="button">Add Sale</button>
        <Title className="icon-table">Sales Table</Title>
        <SalesTable sales={sales} />
        <Title className="icon-chart">Sales Chart</Title>
        <Chart sales={sales} employees={employees} />
        <Title className="icon-rate">Customer Satisfaction</Title>
        <Rate sales={sales} employees={employees} />
      </div>
      <Footer />
    </>
  )
}

export default App
