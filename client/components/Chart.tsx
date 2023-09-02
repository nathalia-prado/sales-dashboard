import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { EmployeeData } from "../../models/employee";
import { Sale } from "../../models/sale";
import useChartData, { ChartData } from "./utils/useChartData";

function Chart({sales, employees} : {sales: Sale[] | null, employees: EmployeeData[] | null, }) {

  const chartData: Array<ChartData> = useChartData({sales, employees})

    return (
      <section className="chart-section">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
          >
            <XAxis type="number"></XAxis>
            <YAxis type="category" dataKey="employeeName"></YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#083860" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    )
  }
  
  export default Chart
  