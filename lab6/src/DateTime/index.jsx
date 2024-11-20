import React, { useState } from "react";
import CurrentDate from "./Current/CurrentDate"
import Time from "./Current/CurrentTime"

export default function DateTime(props) {
    const [date_time, setDateTime] = new useState(new Date())

    setInterval(() => {
        setDateTime(new Date())
    }, 1000);

    return <div>
        <CurrentDate date={date_time}/>
        {'  '}
        <Time time={date_time}/>
    </div>
}