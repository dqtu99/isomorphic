import { DatePicker } from "antd";
import {
  AreaChart as AreaChartLib,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { ["News Customer"]: 4000, ["Old Customer"]: 2400, name: "Jan" },
  { ["News Customer"]: 3000, ["Old Customer"]: 1398, name: "Fed" },
  { ["News Customer"]: 2000, ["Old Customer"]: 9800, name: "Mar" },
  { ["News Customer"]: 2780, ["Old Customer"]: 3908, name: "Apr" },
  { ["News Customer"]: 1890, ["Old Customer"]: 4800, name: "May" },
  { ["News Customer"]: 2390, ["Old Customer"]: 3800, name: "Jun" },
  { ["News Customer"]: 2780, ["Old Customer"]: 3908, name: "Aug" },
  { ["News Customer"]: 1890, ["Old Customer"]: 4800, name: "Sep" },
  { ["News Customer"]: 2390, ["Old Customer"]: 3800, name: "Oct" },
  { ["News Customer"]: 1890, ["Old Customer"]: 4800, name: "Nov" },
  { ["News Customer"]: 2390, ["Old Customer"]: 3800, name: "Dec" },
];

function CustomerRate() {
  return (
    <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Repeat Customer Rate</p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <p>New customer</p>
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <p>Old customer</p>
          </div>
        </div>
        <DatePicker picker="year" />
      </div>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChartLib
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0} />
                <stop offset="95%" stopColor="#fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Area
              type="monotone"
              dataKey="News Customer"
              stroke="#12b981"
              fillOpacity={1}
              strokeWidth={3}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Old Customer"
              stroke="#3872fb"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChartLib>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CustomerRate;
