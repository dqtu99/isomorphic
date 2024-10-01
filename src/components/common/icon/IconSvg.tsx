interface IconSvgProp {
  svg: string;
}

function IconSvg({ svg }: IconSvgProp) {
  return <div style={{ color: "red" }}>{svg}</div>;
}

export default IconSvg;
