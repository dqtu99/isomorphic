import MonthlyAnalytics from "@/components/common/monthly-analytics/MonthlyAnalytics";
import giftIcon from "@/assets/img/gift.svg";
import iconSale from "@/assets/img/icon-sale.svg";
import revenueIcon from "@/assets/img/icon-revenue.svg";

const data = [
  { value: 100 },
  { value: 300 },
  { value: 200 },
  { value: 278 },
  { value: 100 },
  { value: 300 },
];

function ReportMonthly() {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between">
      <MonthlyAnalytics
        title="News Orders"
        total="1,390"
        percent={32.44}
        status="INCREASED"
        color="#3872fb"
        icon={giftIcon}
        data={data}
      />
      <MonthlyAnalytics
        title="Sales"
        total="$57,890"
        percent={4.44}
        status="DECREASED"
        color="#12b981"
        icon={iconSale}
        data={data}
      />
      <MonthlyAnalytics
        title="Revenue"
        total="$12,390"
        percent={4.44}
        status="INCREASED"
        color="#7928cb"
        icon={revenueIcon}
        data={data}
      />
    </div>
  );
}

export default ReportMonthly;
