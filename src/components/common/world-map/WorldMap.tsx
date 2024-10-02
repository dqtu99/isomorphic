import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
import { useEffect, useState } from "react";
import WorldMapLib, { ISOCode } from "react-svg-worldmap";

type Country = { country: ISOCode; value: number };

interface WorldMapProps {
  data: Country[];
}

export default function WorldMap({ data }: WorldMapProps) {
  const { width } = useWindowSize();
  const [sizeWorldMap, setSizeWorldMap] = useState(600);
  useEffect(() => {
    setSizeWorldMap(width - 110);
  }, [width]);

  return (
    <WorldMapLib
      color="#028ca6"
      valueSuffix="%"
      size={sizeWorldMap}
      data={data}
    />
  );
}
