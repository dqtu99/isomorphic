import ProductItem from "@/components/common/product-item/ProductItem";
import { DatePicker } from "antd";

function TopProduct() {
  return (
    <div className="w-full flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold ">Top Product</p>
          <div className="flex gap-2 items-center mt-3">
            <span className="text-gray-400">Overview : </span>
            <DatePicker picker="date" />
          </div>
        </div>
        <span className="text-sm cursor-pointer underline text-gray-400">
          View more
        </span>
      </div>
      <div className="w-full h-96 flex flex-col gap-6 overflow-x-scroll pr-4">
        {Array(50)
          .fill(1)
          .map((_, idx) => (
            <ProductItem key={idx} star={Math.floor(Math.random() * 6)} />
          ))}
      </div>
    </div>
  );
}

export default TopProduct;
