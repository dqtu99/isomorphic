import { DatePicker } from "antd";
import {
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";

const data = [
  { value: 100, uv: 200, month: "Jan" },
  { value: 300, uv: 200, month: "Fer" },
  { value: 200, uv: 300, month: "Mar" },
  { value: 278, uv: 100, month: "Apr" },
  { value: 100, uv: 50, month: "May" },
  { value: 700, uv: 250, month: "Jun" },
  { value: 100, uv: 200, month: "Jul" },
  { value: 300, uv: 300, month: "Aug" },
  { value: 200, uv: 100, month: "Sep" },
  { value: 278, uv: 100, month: "Oct" },
  { value: 100, uv: 300, month: "Nov" },
  { value: 600, uv: 100, month: "Dec" },
];

function SaleReport() {
  return (
    <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Sales Report</p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <p>Revenue</p>
            <div className="w-2 h-2 rounded-full bg-indigo-200" />
            <p>Expense</p>
          </div>
        </div>
        <DatePicker picker="year" />
      </div>
      <div className="w-full h-96 flex flex-col gap-6">
        <ResponsiveContainer width="100%" height="100%">
          {/* <BarChart data={data}>
            <XAxis
              dataKey="month"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Bar
              dataKey="value"
              fill="#3335cd"
              radius={[10, 10, 10, 10]}
              animationBegin={1000}
            />
          </BarChart> */}
          <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="value"
              stackId="a"
              barSize={20}
              fill="#282eca"
              radius={[0, 0, 5, 5]}
            />
            <Bar
              dataKey="uv"
              stackId="a"
              fill="#bec8eb"
              radius={[5, 5, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8200e9"
              strokeWidth={1.5}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SaleReport;
