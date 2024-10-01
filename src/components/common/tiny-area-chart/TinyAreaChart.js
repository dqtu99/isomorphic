import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { uv: 4000, pv: 2400, amt: 2400 },
  { uv: 3000, pv: 1398, amt: 2210 },
  { uv: 2000, pv: 9800, amt: 2290 },
  { uv: 2780, pv: 3908, amt: 2000 },
  { uv: 1890, pv: 4800, amt: 2181 },
  { uv: 2390, pv: 3800, amt: 2500 },
  { uv: 3490, pv: 4300, amt: 2100 },
  { uv: 349, pv: 4300, amt: 2100 },
  { uv: 3100, pv: 4300, amt: 2100 },
];

const AreaChartComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#e7f6f0" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#e7f6f0" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="green"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default AreaChartComponent;
