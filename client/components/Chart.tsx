import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function Chart() {

  const data = [
    {name: 'Jack', sales: 10},
    {name: 'Nick', sales: 20},
    {name: 'Robert', sales: 5},
    {name: 'Kevin', sales: 3},
  ]

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="name"></YAxis>
          <Bar dataKey="sales" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  }
  
  export default Chart
  