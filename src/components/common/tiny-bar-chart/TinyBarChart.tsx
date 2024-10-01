import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

interface TinyBarChartProps {
  color: string;
  barSize: number;
}

const TinyBarChart = ({ color, barSize = 5 }: TinyBarChartProps) => {
  const data = [
    { name: "A", value: 100 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
    { name: "C", value: 200 },
    { name: "D", value: 578 },
    { name: "C", value: 200 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar
          dataKey="value"
          fill={color}
          radius={[10, 10, 10, 10]}
          barSize={barSize}
        />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart;
