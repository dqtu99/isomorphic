import React from "react";
import {
  BarChart as BarChartLib,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  color: string;
  barSize?: number;
  data: unknown[];
}

const BarChart = ({ color, barSize = 5, data }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartLib data={data}>
        <Bar
          dataKey="value"
          fill={color}
          radius={[10, 10, 10, 10]}
          barSize={barSize}
          animationBegin={1000}
        />
        <Tooltip />
      </BarChartLib>
    </ResponsiveContainer>
  );
};

export default BarChart;
