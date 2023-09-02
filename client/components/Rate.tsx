import { EmployeeData } from "../../models/employee"
import { Sale } from "../../models/sale"
import RateCard from "./RateCard"
import useRateData, { RateData } from "./utils/useRateData"

function Rate({sales, employees} : {sales: Sale[] | null, employees: EmployeeData[] | null, }) {

    const rateData: Array<RateData> = useRateData({sales, employees})
    
    return (
      <section className="rate-section">
        {rateData.map(data => <RateCard key={data.employeeName} cardInfo={data} />)}
      </section>
    )
  }
  
  export default Rate
  