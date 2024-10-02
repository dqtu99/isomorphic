import AreaChart from "@/components/common/area-chart/AreaChart";
import TimeOption from "@/components/common/time-option/TimeOption";
import { Button } from "antd";

const data = [
  { ["Total sale"]: 4000, pv: 2400, amt: 2400 },
  { ["Total sale"]: 3000, pv: 1398, amt: 2210 },
  { ["Total sale"]: 2000, pv: 9800, amt: 2290 },
  { ["Total sale"]: 2780, pv: 3908, amt: 2000 },
  { ["Total sale"]: 1890, pv: 4800, amt: 2181 },
  { ["Total sale"]: 2390, pv: 3800, amt: 2500 },
];

function Profit() {
  return (
    <div className="h-full flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md lg:w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Total profit</p>
          <p className="font-bold">$ 8,950.00</p>
        </div>
        <Button>Detail</Button>
      </div>
      <div className="w-full flex flex-col gap-6">
        <TimeOption />
        <AreaChart data={data} />
        <p className="text-sm text-gray-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 256 256"
            className="inline-flex h-auto w-4 text-gray-500/80 dark:text-gray-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path>
          </svg>
          Total profit without tax included.
        </p>
      </div>
    </div>
  );
}

export default Profit;
