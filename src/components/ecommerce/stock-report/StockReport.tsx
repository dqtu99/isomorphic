import { Image, Table as TableLib, TableProps } from "antd";
import Search from "antd/es/input/Search";
import starYellow from "@/assets/img/star-icon-yellow.svg";
import starNormal from "@/assets/img/star-icon-normal.svg";
import ImgNext from "next/image";
import {
  EditOutlined,
  FolderViewOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

type Product = {
  avatar: string;
  name: string;
  category: string;
};

type Rate = {
  avgRate: number | string;
  star: number;
  totalRate: number;
};
interface DataType {
  key: string;
  product: Product;
  sku: string;
  price: string;
  rate: Rate;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Product",
    dataIndex: "product",
    render: (_, { product }) => (
      <div className="flex gap-3 justify-center items-center">
        <div className="hover:cursor-pointer img-round ">
          <Image src={product?.avatar} alt="fail" width={30} />
        </div>
        <div>
          <p className="font-bold">{product?.name}</p>
          <p className="text-gray-400">{product?.category}</p>
        </div>
      </div>
    ),
  },

  {
    title: "SKU",
    dataIndex: "sku",
    key: "sku",
    render: (text) => <p className="text-md text-gray-500">{text}</p>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>$ {text}</p>,
  },
  {
    title: "Rating",
    dataIndex: "rate",
    render: (_, { rate }) => (
      <div className="flex gap-3 justify-start items-center">
        <p className="text-gray-400">{rate?.avgRate} </p>
        <div className="star flex gap-2 flex-wrap">
          {Array(rate?.star)
            .fill(0)
            .map((_, idx) => (
              <ImgNext key={idx} src={starYellow} alt="" />
            ))}
          {Array(5 - rate?.star)
            .fill(0)
            .map((_, idx) => (
              <ImgNext key={idx} src={starNormal} alt="" />
            ))}
        </div>
        <p className="text-gray-400">({rate?.totalRate})</p>
      </div>
    ),
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
    product: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Modern Gloves",
      category: "Kid",
    },
    sku: "SKU-52442",
    price: "410.00",
    rate: {
      avgRate: 3.5,
      star: 3,
      totalRate: 12,
    },
    status: "COMPLETED",
  },
  {
    key: "1",
    product: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Modern Gloves",
      category: "Kid",
    },
    sku: "SKU-52442",
    price: "410.00",
    rate: {
      avgRate: 3.5,
      star: 3,
      totalRate: 12,
    },
    status: "CANCEL",
  },
  {
    key: "1",
    product: {
      avatar:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-04.webp",
      name: "Modern Gloves",
      category: "Kid",
    },
    sku: "SKU-52442",
    price: "410.00",
    rate: {
      avgRate: 3.5,
      star: 3,
      totalRate: 12,
    },
    status: "PENDING",
  },
];
function RecentOrder() {
  return (
    <div className="flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Stock Report</p>
        </div>
        <Search placeholder="Search product ..." style={{ width: 200 }} />
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
