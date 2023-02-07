import * as React from "react";
const SearchIcon = (props) => (
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
        <g transform="matrix(1,0,0,1,8.53553,1.6317)">
            <g transform="matrix(0.965926,0.258819,-0.258819,0.965926,6.10913,-22.361)">
                <circle
                    cx={50}
                    cy={50}
                    r={30}
                    style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: 9,
                    }}
                />
            </g>
            <g transform="matrix(0.814424,-0.00359048,-0.410321,0.703516,37.4205,31.872)">
                <path
                    d="M50,50L80,80"
                    style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "15.75px",
                        strokeLinecap: "round",
                    }}
                />
            </g>
        </g>
        <g transform="matrix(0.6,0,0,1,20,-2)">
            <path
                d="M30,50C30,50 30,50 30.001,50C41.586,55.793 58.414,55.793 69.999,50C70,50 70,50 70,50"
                style={{
                    fill: "none",
                    stroke: "currentcolor",
                    strokeWidth: "5.71px",
                    strokeLinecap: "round",
                }}
            />
        </g>
        <g transform="matrix(1,0,0,1,-1.42109e-14,-2)">
            <circle cx={40} cy={40} r={5}
                style={{
                    fill: "currentcolor",
                }} />
        </g>
        <g transform="matrix(1,0,0,1,-1.42109e-14,-2)">
            <circle cx={60} cy={40} r={5}
                style={{
                    fill: "currentcolor",
                }}
            />
        </g>
    </svg>
);
export default SearchIcon;
