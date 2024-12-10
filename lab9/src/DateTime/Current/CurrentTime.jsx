import React, { useEffect } from "react"; // Імпортуємо useEffect

export default function CurrentTime({ time }) {

    const formattedTime = new Date(time).toLocaleTimeString("uk-UA");
    return <>{formattedTime}</>;
}
