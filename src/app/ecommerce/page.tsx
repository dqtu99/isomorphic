"use client";
import Header from "@/components/header/Header";
import HeroSection from "@/components/ecommerce/hero-section/HeroSection";
import UserLocation from "@/components/ecommerce/user-location/UserLocation";
import StockReport from "@/components/ecommerce/stock-report/StockReport";
import CustomerRate from "@/components/ecommerce/repeat-customer-rate/CustomerRate";
import SaleReport from "@/components/ecommerce/sale-report/SaleReport";
import TopProduct from "@/components/ecommerce/top-product/TopProduct";
import ReportMonthly from "@/components/ecommerce/report-monthly/ReportMonthly";
import Profit from "@/components/ecommerce/profit/Profit";
import PromotionSales from "@/components/ecommerce/promotion-sales/PromotionSales";
import QueryProvider from "@/components/query-provider/QueryProvider";
import RecentOrder from "@/components/ecommerce/recent-order/RecentOrder";
import Menu from "@/components/menu/Menu";
import { useState } from "react";

export default function Ecommerce() {
  const [isShopMenuPopup, setShowMenuPopup] = useState<boolean>(false);

  return (
    <QueryProvider>
      <div className="flex">
        <Menu isShow={isShopMenuPopup} setIsShow={setShowMenuPopup} />
        <div className="w-full flex flex-col">
          <Header setShowMenuPopup={setShowMenuPopup} />
          <div className="ecommerce-container px-4 py-2 flex flex-col gap-6">
            <HeroSection />
            <ReportMonthly />
            <div className="flex flex-col gap-6 lg:flex-row  ">
              <Profit />
              <PromotionSales />
            </div>
            <SaleReport />
            <RecentOrder />
            <CustomerRate />
            <div className="flex flex-col gap-6 lg:flex-row">
              <TopProduct />
              <UserLocation />
            </div>
            <StockReport />
          </div>
        </div>
      </div>
    </QueryProvider>
  );
}
