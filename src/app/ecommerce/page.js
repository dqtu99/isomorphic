"use client";
import Header from "@/components/header/Header";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import Image from "next/image";
import handIcon from "@/assets/img/hand-icon.svg";
import MonthlyAnalytics from "@/components/common/monthly-analytics/MonthlyAnalytics";
import giftIcon from "@/assets/img/gift.svg";
import iconSale from "@/assets/img/icon-sale.svg";
import revenueIcon from "@/assets/img/icon-revenue.svg";
import AreaChartComponent from "@/components/common/tiny-area-chart/TinyAreaChart";
import TinyBarChart from "@/components/common/tiny-bar-chart/TinyBarChart";

export default function Ecommerce() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="ecommerce-container px-4 py-2 flex flex-col gap-6   ">
        <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
          <p className="text-2xl font-bold">
            Good Morning , <br />
            Cameron
            <sp className="inline-block ml-2 ">
              <Image width={32} src={handIcon} alt="fail" />
            </sp>
          </p>
          <p>
            Here’s What happening on your store today. See the statistics at
            once.
          </p>
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Add Product
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <MonthlyAnalytics
            title="News Orders"
            total="1,390"
            percent={32.44}
            status="INCREASED"
            color="#3872fb"
            icon={giftIcon}
          />
          <MonthlyAnalytics
            title="Sales"
            total="$57,890"
            percent={4.44}
            status="DECREASED"
            color="#12b981"
            icon={iconSale}
          />
          <MonthlyAnalytics
            title="Revenue"
            total="$12,390"
            percent={4.44}
            status="INCREASED"
            color="#7928cb"
            icon={revenueIcon}
          />
        </div>
        <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
          <div className="w-full flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Total profit</p>
              <p className="font-bold">$ 8,950.00</p>
            </div>
            <Button>Detail</Button>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full h-12 px-4 flex justify-between  items-center border border-solid rounded-md border-slate-200">
              <div className="w-12 px-2 py-1 hover:cursor-pointer flex justify-center  bg-gray-100 rounded-md">
                5 D
              </div>
              <div> 2 W </div>
              <div> 1 M </div>
              <div> 6 M </div>
              <div> 1 Y </div>
            </div>
            <div>
              <AreaChartComponent />
            </div>
            <p className="text-sm text-gray-400">
              Total profit without tax included.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
          <div className="w-full flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Sales Report</p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <p>Revenue</p>
                <div className="w-2 h-2 rounded-full bg-indigo-200" />
                <p>Expense</p>
              </div>
            </div>
            <DatePicker picker="year" />
          </div>
          <div className="w-full h-96 flex flex-col gap-6">
            <TinyBarChart barSize={40} color="#3335cd" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
          <div className="w-full flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Promotional Sales</p>
            </div>
            <DatePicker picker="month" />
          </div>
          <div className="w-full h-96 flex flex-col gap-6">
            <TinyBarChart barSize={40} color="#3335cd" />
          </div>
        </div>
      </div>
    </div>
  );
}
