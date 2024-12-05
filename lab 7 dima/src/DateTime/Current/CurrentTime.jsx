import React from "react";

export default function CurrentTime({ time }) {
    const formattedTime = time.toLocaleTimeString("uk-UA");

    return <>{formattedTime}</>;
}
