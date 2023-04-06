import * as React from "react"

const DragHandleIcon = (props) => (
    <svg
        viewBox="0 0 300 188"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
        }}
        {...props}
    >
        <circle cx={187.5} cy={187.5} r={37.5} transform="translate(-150 -150)" />
        <circle cx={300} cy={187.5} r={37.5} transform="translate(-150 -150)" />
        <circle cx={412.5} cy={187.5} r={37.5} transform="translate(-150 -150)" />
        <circle cx={187.5} cy={300} r={37.5} transform="translate(-150 -150)" />
        <circle cx={300} cy={300} r={37.5} transform="translate(-150 -150)" />
        <circle cx={412.5} cy={300} r={37.5} transform="translate(-150 -150)" />
    </svg>
)

export default DragHandleIcon
