import React from "react";
import {
  AreaChart as AreaChartLib,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { ["Total sale"]: 4000, pv: 2400, amt: 2400 },
  { ["Total sale"]: 3000, pv: 1398, amt: 2210 },
  { ["Total sale"]: 2000, pv: 9800, amt: 2290 },
  { ["Total sale"]: 2780, pv: 3908, amt: 2000 },
  { ["Total sale"]: 1890, pv: 4800, amt: 2181 },
  { ["Total sale"]: 2390, pv: 3800, amt: 2500 },
];

interface AreaChartLibProps {
  isLineNear: boolean;
}

const AreaChart = ({ isLineNear = true }: AreaChartLibProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChartLib
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        {isLineNear && (
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e7f6f0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e7f6f0" stopOpacity={0} />
            </linearGradient>
          </defs>
        )}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total sale"
          stroke="green"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChartLib>
    </ResponsiveContainer>
  );
};

export default AreaChart;
