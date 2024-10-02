import { PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import handIcon from "@/assets/img/hand-icon.svg";
import shopIllustration from "@/assets/img/shop-illustration.webp";
import { Button } from "antd";

function HeroSection() {
  return (
    <div className="flex justify-start p-6 relative border-solid border border-slate-200 rounded-md">
      <div className="flex flex-col gap-5 items-start md:w-1/2">
        <p className="text-2xl font-bold">
          Good Morning , <br />
          Cameron
          <span className="inline-block ml-2  ">
            <Image width={32} src={handIcon} alt="fail" />
          </span>
        </p>
        <p>
          Here’s What happening on your store today. See the statistics at once.
        </p>
        <Button type="primary" size="large" icon={<PlusOutlined />}>
          Add Product
        </Button>
      </div>
      <Image
        src={shopIllustration}
        alt="fail"
        width={300}
        height={300}
        className="hidden md:block absolute right-0 minus-top-35"
      />
    </div>
  );
}

export default HeroSection;
