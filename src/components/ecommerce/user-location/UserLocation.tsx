import { DatePicker } from "antd";
import WorldMap from "@/components/common/world-map/WorldMap";

function UserLocation() {
  const data = [
    { country: "US", name: "United States", value: 40, style: "bg-[#028ca6]" },
    { country: "CA", name: "Canada", value: 20, style: "bg-[#8bcad6]" },
    { country: "IN", name: "India", value: 15, style: "bg-[#a1d4de]" },
    { country: "CN", name: "China", value: 5, style: "bg-[#cce8ed]" },
    { country: "GB", name: "United Kingdom", value: 5, style: "bg-[#cce8ed]" },
    { country: "FR", name: "France", value: 5, style: "bg-[#cce8ed]" },
  ];
  return (
    <div className="lg:w-1/2 flex flex-col gap-5 items-start p-6 border-solid border border-slate-200 rounded-md">
      <div className="w-full flex justify-between items-center">
        <p className="text-lg font-bold">User Location</p>
        <DatePicker picker="month" />
      </div>
      <div className="w-full flex flex-col gap-6 flex-wrap">
        <div>
          <WorldMap data={data} />
          <div className="flex gap-2 flex-wrap justify-center  text-md text-gray-400">
            {data.map((country) => {
              return (
                <div key={country.name} className="flex items-center gap-1">
                  <div
                    className={`rounded-full w-2 h-2 ${country.style}`}
                  ></div>
                  {country.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLocation;
