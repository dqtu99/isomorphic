import Table from "@/components/common/table/Table";
import Search from "antd/es/input/Search";

function RecentOrder() {
  return (
    <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Recent Order</p>
        </div>
        <Search placeholder="Search order ..." style={{ width: 200 }} />
      </div>
      <div className="w-full h-96 flex flex-col gap-6">
        <Table />
      </div>
    </div>
  );
}

export default RecentOrder;
