import { CSSProperties } from "react";

type ArrowDownType = {
  fill?: string;
  style?: CSSProperties;
};

const ArrowDown = ({ fill, style }: ArrowDownType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={fill || "#e8eaed"}
      style={style}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export default ArrowDown;
