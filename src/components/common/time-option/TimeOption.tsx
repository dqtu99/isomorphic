import { useEffect, useState } from "react";
import { clsx } from "clsx";

const timeOptions = [
  { value: "5D", label: "5 D" },
  { value: "2W", label: "2 W" },
  { value: "1M", label: "1 M" },
  { value: "6M", label: "6 M" },
  { value: "1Y", label: "1 Y" },
];

interface TimeOptionProps {
  setGroupTime: (value: string) => void;
}

function TimeOption({ setGroupTime }: TimeOptionProps) {
  const defaultTime = timeOptions[0].value;
  const [timeActive, setTimeActive] = useState(defaultTime);

  const handleClickTimeOption = (value: string) => {
    setGroupTime(timeActive);
    setTimeActive(value);
  };

  return (
    <div className="w-full h-12 px-4 flex justify-between  items-center border border-solid rounded-md border-slate-200">
      {timeOptions.map(({ value, label }) => (
        <div
          key={value}
          className={clsx(
            "w-12 px-2 py-1 text-sm hover:cursor-pointer flex justify-center  rounded-md",
            timeActive === value && " bg-gray-100"
          )}
          onClick={() => handleClickTimeOption(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default TimeOption;
