
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
import SalesModal from "./SalesModal";

function Dashboard() {

  const [sales, setSales] = useState<Sale[] | null>(null)
  const [employees, setEmployees] = useState<EmployeeData[] | null>(null)
  const [open, setOpen] = useState(false)


  async function fetchSalesAndEmployees() {
    const salesData = await getAllSales()
    setSales(salesData)

    const employeesData = await getAllEmployees()
    setEmployees(employeesData)
  }

  useEffect(() => {
    try {
      fetchSalesAndEmployees()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLoadingAfterSaving = () => {
    setOpen(false)
    fetchSalesAndEmployees()
  }

  return (
    <>
      <Header />
      <div className="container">
        <Title>Sales Performance Dashboard</Title>
        <button onClick={handleOpen} className="button">Add Sale</button>
        <SalesModal options={employees?.map(employee => ({label: employee.name, value: employee.id}))} open={open} handleClose={handleClose} handleLoading={handleLoadingAfterSaving} />
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

export default Dashboard
