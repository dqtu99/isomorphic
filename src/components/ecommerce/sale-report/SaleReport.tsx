import { DatePicker } from "antd";
import {
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { Revenue: 100, Expense: 200, month: "Jan", line: 100 },
  { Revenue: 300, Expense: 200, month: "Fer", line: 300 },
  { Revenue: 200, Expense: 300, month: "Mar", line: 200 },
  { Revenue: 278, Expense: 100, month: "Apr", line: 278 },
  { Revenue: 100, Expense: 50, month: "May", line: 100 },
  { Revenue: 700, Expense: 250, month: "Jun", line: 700 },
  { Revenue: 100, Expense: 200, month: "Jul", line: 100 },
  { Revenue: 300, Expense: 300, month: "Aug", line: 300 },
  { Revenue: 200, Expense: 100, month: "Sep", line: 200 },
  { Revenue: 278, Expense: 100, month: "Oct", line: 278 },
  { Revenue: 100, Expense: 300, month: "Nov", line: 100 },
  { Revenue: 600, Expense: 100, month: "Dec", line: 600 },
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
          <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar
              dataKey="Revenue"
              stackId="a"
              barSize={20}
              fill="#282eca"
              radius={[0, 0, 5, 5]}
            />
            <Bar
              dataKey="Expense"
              stackId="a"
              fill="#bec8eb"
              radius={[5, 5, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="line"
              stroke="#8200e9"
              strokeWidth={1.5}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="custom-tooltip p-5 block opacity-100 bg-white border-solid border border-slate-200 rounded-md">
                      <p className="label bg-slate-50">{`${label}`}</p>
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <p className="text-sm text-gray-500">{`Revenue : ${payload[0].value}`}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-200" />
                        <p className="text-sm text-gray-500">{`Expense : ${payload[1].value}`}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SaleReport;
