import RadialBarChart from "@/components/common/radial-bar-chart/RadialBarChart";
import { DatePicker } from "antd";

function PromotionSales() {
  return (
    <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md lg:w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Promotional Sales</p>
        </div>
        <DatePicker picker="month" />
      </div>
      <div className="w-full h-96 flex flex-col gap-6">
        <RadialBarChart />
      </div>
    </div>
  );
}

export default PromotionSales;
