
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SalesTable from "./SalesTable";
import Title from "./Title";
import { getAllSales } from "../apis/Sales";
import { Sale } from "../../models/sale";
import Chart from "./Chart";

function App() {

  const [sales, setSales] = useState<Sale[] | null>(null)

  useEffect(() => {

    async function fetchSales() {
      const salesData = await getAllSales()
      setSales(salesData)
    }

    try {
      fetchSales()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Title>Sales Dashboard</Title>
        <SalesTable sales={sales} />
        <Chart />
      </div>
      <Footer />
    </>
  )
}

export default App
