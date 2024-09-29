import classes from "./back-to-home.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function BackHomeButton() {
  return (
    <div className={`${classes["back-home"]} `}>
      <div className="flex gap-1 hover:cursor-pointer text-sm font-semibold justify-center p-4 lg:justify-start lg:w-fit">
        <ArrowLeftOutlined />
        <p>Back to home</p>
      </div>
    </div>
  );
}
