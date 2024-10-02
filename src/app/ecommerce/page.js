"use client";
import Header from "@/components/header/Header";
import { Button, DatePicker } from "antd";
import MonthlyAnalytics from "@/components/common/monthly-analytics/MonthlyAnalytics";
import giftIcon from "@/assets/img/gift.svg";
import iconSale from "@/assets/img/icon-sale.svg";
import revenueIcon from "@/assets/img/icon-revenue.svg";
import AreaChart from "@/components/common/area-chart/AreaChart";
import RadialBarChart from "@/components/common/radial-bar-chart/RadialBarChart";
import HeroSection from "@/components/ecommerce/hero-section/HeroSection";
import TimeOption from "@/components/common/time-option/TimeOption";
import UserLocation from "@/components/ecommerce/user-location/UserLocation";
import StockReport from "@/components/ecommerce/stock-report/StockReport";
import CustomerRate from "@/components/ecommerce/repeat-customer-rate/CustomerRate";
import SaleReport from "@/components/ecommerce/sale-report/SaleReport";
import TopProduct from "@/components/ecommerce/top-product/TopProduct";

export default function Ecommerce() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="ecommerce-container px-4 py-2 flex flex-col gap-6   ">
        <HeroSection />
        <div className="flex flex-col gap-6 md:flex-row justify-between">
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
        <div className="flex flex-col gap-6 lg:flex-row  ">
          <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md lg:w-full">
            <div className="w-full flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Total profit</p>
                <p className="font-bold">$ 8,950.00</p>
              </div>
              <Button>Detail</Button>
            </div>
            <div className="w-full flex flex-col gap-6">
              <TimeOption />
              <AreaChart />
              <p className="text-sm text-gray-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  class="inline-flex h-auto w-4 text-gray-500/80 dark:text-gray-600"
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
        </div>
        <SaleReport />
        <StockReport />
        <CustomerRate />
        <div className="flex flex-col gap-6 lg:flex-row">
          <TopProduct />
          <UserLocation />
        </div>
        <StockReport />
      </div>
    </div>
  );
}
