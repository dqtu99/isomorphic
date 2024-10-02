import BarChart from "@/components/common/bar-chart/BarChart";
import Image from "next/image";
import increase from "@/assets/img/icon-increase.svg";
import decreaseIcon from "@/assets/img/descrease-icon.svg";

type DataMonthly = {
  name?: string;
  value: number;
};

interface MonthlyDataStatsProps {
  title: string;
  total: number | string;
  percent: number | string;
  status: string;
  data: DataMonthly[];
  color: string;
  icon: string;
}

export default function MonthlyAnalytics({
  title,
  total,
  percent,
  status,
  color,
  icon,
  data,
}: MonthlyDataStatsProps) {
  return (
    <div className="flex w-full flex-col gap-6 items-start p-5 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex gap-2 justify-between">
        <div className="flex gap-2 justify-center items-center">
          <Image src={icon} alt="fail" width={24} />
          <div>
            <p className="text-sm text-gray-400 ">{title}</p>
            <p className="font-bold text-lg">{total}</p>
          </div>
        </div>
        <div className="w-1/6 md:hidden lg:block lg:w-1/3">
          <BarChart data={data} color={color} barSize={6} />
        </div>
      </div>
      <div className="w-full pt-4  border-t border-dashed border-slate-200">
        {status === "INCREASED" ? (
          <span className="text-sm flex gap-1 text-lime-600">
            <Image src={increase} alt="fail" /> + {percent} %{" "}
            <span className="text-gray-400">
              <span className="md:hidden lg:inline">Increased</span> last month
            </span>
          </span>
        ) : (
          <span className="text-sm flex gap-1 text-rose-600">
            <Image src={decreaseIcon} alt="fail" /> - {percent} %
            <span className="text-gray-400">
              <span className="md:hidden lg:inline">Increased</span> last month
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
