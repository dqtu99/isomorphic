import { Image, Table as TableLib, TableProps } from "antd";
import Search from "antd/es/input/Search";
import {
  EditOutlined,
  FolderViewOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

type Customer = {
  avatar: string;
  name: string;
  email: string;
};
interface DataType {
  key: string;
  item: number;
  price: number;
  create: string;
  modified: string;
  status: string;
  customer?: Customer;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Items",
    dataIndex: "item",
    key: "item",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Customer",
    dataIndex: "customer",
    render: (_, { customer }) => (
      <div className="flex gap-3 justify-center items-center">
        <div className="hover:cursor-pointer img-round ">
          <Image src={customer?.avatar} alt="fail" width={30} />
        </div>
        <div>
          <p className="font-bold">{customer?.name}</p>
          <p className="text-gray-400">{customer?.email}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <a>${text}</a>,
  },
  {
    title: "Create",
    dataIndex: "create",
    key: "create",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Modified",
    dataIndex: "modified",
    key: "modified",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status === "COMPLETED" && (
          <div className="text-green-500 flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Completed
          </div>
        )}
        {status === "CANCEL" && (
          <div className="text-red-500 flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            Cancelled
          </div>
        )}
        {status === "PENDING" && (
          <div className="text-yellow-500 flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
            Pending
          </div>
        )}
      </>
    ),
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    render: () => (
      <div className="flex gap-4">
        <EditOutlined className="hover:cursor-pointer" />
        <FolderViewOutlined className="hover:cursor-pointer" />
        <DeleteOutlined className="hover:cursor-pointer" />
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    item: 1,
    price: 32,
    create: "July 21,2023",
    modified: "July 21,2023",
    status: "COMPLETED",
    customer: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Luther Windler",
      email: "carmella.morar52@gmail.com",
    },
  },
  {
    key: "2",
    item: 2,
    price: 32,
    create: "July 21,2023",
    modified: "July 21,2023",
    status: "CANCEL",
    customer: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Luther Windler",
      email: "carmella.morar52@gmail.com",
    },
  },
  {
    key: "3",
    item: 3,
    price: 32,
    create: "July 21,2023",
    modified: "July 21,2023",
    status: "PENDING",
    customer: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Luther Windler",
      email: "carmella.morar52@gmail.com",
    },
  },
];
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
        <TableLib<DataType>
          columns={columns}
          dataSource={data}
          scroll={{ x: "100%" }}
        />
      </div>
    </div>
  );
}

export default RecentOrder;
