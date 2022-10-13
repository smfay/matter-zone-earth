import * as React from "react";

const MenuIcon = (props) => (
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
        <g transform="matrix(2,0,0,2,-70,-30)">
            <circle
                cx={50}
                cy={50}
                r={10}
                style={{
                    fill: "none",
                    stroke: "rgb(24 24 27)",
                    strokeWidth: "1.5px",
                }}
            />
        </g>
        <g transform="matrix(2,0,0,2,-30,-30)">
            <circle
                cx={50}
                cy={50}
                r={10}
                style={{
                    fill: "none",
                    stroke: "rgb(24 24 27)",
                    strokeWidth: "1.5px",
                }}
            />
        </g>
        <g transform="matrix(2,0,0,2,-30,-70)">
            <circle
                cx={50}
                cy={50}
                r={10}
                style={{
                    fill: "none",
                    stroke: "rgb(24 24 27)",
                    strokeWidth: "1.5px",
                }}
            />
        </g>
        <g transform="matrix(2,0,0,2,-70,-70)">
            <circle
                cx={50}
                cy={50}
                r={10}
                style={{
                    fill: "none",
                    stroke: "rgb(24 24 27)",
                    strokeWidth: "1.5px",
                }}
            />
        </g>
    </svg>
);

export default MenuIcon;
