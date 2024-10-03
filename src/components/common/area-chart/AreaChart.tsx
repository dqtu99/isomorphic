import React from "react";
import {
  AreaChart as AreaChartLib,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AreaChartLibProps {
  isLineNear?: boolean;
  data: unknown[];
  dataKey: string;
}

const AreaChart = ({ data, isLineNear = true, dataKey }: AreaChartLibProps) => {
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
        <Tooltip label="Total profit" />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="green"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChartLib>
    </ResponsiveContainer>
  );
};

export default AreaChart;
