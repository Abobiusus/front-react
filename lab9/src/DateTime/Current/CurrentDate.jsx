import React from "react";

export default function CurrentDate(props) {
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: '2-digit' };
    const formattedDate = props.date.toLocaleDateString("uk-UA", options);
    return <>{formattedDate}</>
}