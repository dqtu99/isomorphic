import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
import React from "react";
import {
  RadialBarChart as RadialBarChartLib,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Youtube", uv: 31.47, pv: 2400, fill: "#ff0000" },
  { name: "Instagram", uv: 26.69, pv: 4567, fill: "#e12f6d" },
  { name: "Twitter", uv: 15.69, pv: 1398, fill: "#1ea1f1" },
  { name: "FaceBook", uv: 8.22, pv: 9800, fill: "#4267b2" },
];

const RadialBarChart = () => {
  const { width: widthWindow } = useWindowSize();
  const isScreenMd = widthWindow >= 768 && widthWindow < 1024;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChartLib
        width={600}
        height={600}
        cx="50%"
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={20}
        data={data}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="uv"
        />
        <Legend
          margin={{ top: 0, left: 10, right: 0, bottom: 0 }}
          iconSize={10}
          layout={isScreenMd ? "vertical" : "horizontal"}
          align={isScreenMd ? "right" : "center"}
          verticalAlign={isScreenMd ? "middle" : "bottom"}
        />
      </RadialBarChartLib>
    </ResponsiveContainer>
  );
};

export default RadialBarChart;
