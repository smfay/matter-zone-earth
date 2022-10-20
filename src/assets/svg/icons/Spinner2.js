import * as React from "react";
const Spinner2 = (props) => (
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
            strokeLinecap: "square",
            strokeMiterlimit: 1,
        }}
        role="img"
        {...props}
    >
        <path
            d="M89.802,54C87.794,74.2 70.728,90 50,90C29.272,90 12.206,74.2 10.198,54L89.802,54ZM10.198,46C12.206,25.8 29.272,10 50,10C70.728,10 87.794,25.8 89.802,46L10.198,46Z"
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeWidth: 3,
            }}
        />
        <circle
            cx={50}
            cy={50}
            r={34}
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeWidth: 3,
            }}
        />
        <circle
            cx={50}
            cy={50}
            r={30}
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeWidth: 3,
            }}
        />
    </svg>
);
export default Spinner2;
