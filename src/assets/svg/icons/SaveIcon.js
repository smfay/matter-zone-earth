import * as React from "react"

const SaveIcon = (props) => (
    <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
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
            d="M450 450H150V150h225l75 75v225Z"
            style={{
                fill: "none",
                stroke: "#080605",
                strokeWidth: "24.08px",
            }}
            transform="matrix(1.5 0 0 1.5 -150 -150)"
        />
        <path
            d="M225 150v75h150v-75"
            style={{
                fill: "none",
                stroke: "#080605",
                strokeWidth: "24.08px",
            }}
            transform="matrix(1.5 0 0 1.5 -187.5 -150)"
        />
        <path
            d="M225 450V300h150v150"
            style={{
                fill: "none",
                stroke: "#080605",
                strokeWidth: "20.43px",
            }}
            transform="matrix(2 0 0 1.5 -300 -150)"
        />
        <path
            d="M225 375h150M225 450h150"
            style={{
                fill: "none",
                stroke: "#080605",
                strokeWidth: "36.12px",
            }}
        />
    </svg>
)

export default SaveIcon
