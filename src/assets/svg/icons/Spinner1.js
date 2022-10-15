import * as React from "react";

const Spinner1 = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"

    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    {...props}
  >
    <path
      d="M10,40L10,10L40,10"
      style={{
        fill: "none",
        stroke: "white",
        strokeWidth: 3,
      }}
    />
    <path
      d="M60,10L90,10L90,40"
      style={{
        fill: "none",
        stroke: "white",
        strokeWidth: 3,
      }}
    />
    <path
      d="M90,60L90,90L60,90"
      style={{
        fill: "none",
        stroke: "white",
        strokeWidth: 3,
      }}
    />
    <path
      d="M40,90L10,90L10,60"
      style={{
        fill: "none",
        stroke: "white",
        strokeWidth: 3,
      }}
    />
  </svg>
);

export default Spinner1;
