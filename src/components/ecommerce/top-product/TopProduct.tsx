import ProductItem from "@/components/common/product-item/ProductItem";
import { useGetTopProduct } from "@/query/e-commerce";
import { DatePicker } from "antd";
import { useState } from "react";

interface ProductData {
  id: number;
  name: string;
  img: string;
  price: number;
}

function TopProduct() {
  const [params, setParams] = useState({
    limit: 5,
    page: 1,
  });
  const { topProductList } = useGetTopProduct(params);

  const handleViewAllClick = () => {
    setParams({ limit: 9999, page: 1 });
  };

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
        <span
          className="text-sm cursor-pointer underline text-gray-400"
          onClick={handleViewAllClick}
        >
          View all
        </span>
      </div>
      <div className="w-full h-96 flex flex-col gap-6 overflow-x-scroll pr-4">
        {topProductList &&
          topProductList.map((product: ProductData) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

export default TopProduct;
