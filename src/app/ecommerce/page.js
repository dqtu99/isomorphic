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

export default function Ecommerce() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="ecommerce-container px-4 py-2 flex flex-col gap-6">
        <HeroSection />
        <ReportMonthly />
        <div className="flex flex-col gap-6 lg:flex-row  ">
          <Profit />
          <PromotionSales />
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
