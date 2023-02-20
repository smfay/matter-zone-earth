import * as React from "react"

const EditIcon = (props) => (
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
            d="M150 450v-75l225-225 75 75-225 225h-75M337.5 187.5l75 75"
            style={{
                fill: "none",
                stroke: "#080605",
                strokeWidth: "24.08px",
            }}
            transform="matrix(1.5 0 0 1.5 -150 -150)"
        />
    </svg>
)

export default EditIcon
