import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateTime } from "../Store";
import CurrentDate from "./Current/CurrentDate";
import Time from "./Current/CurrentTime";

export default function DateTime() {
    const dispatch = useDispatch();
    const currentDate = useSelector((state)=>state.date.value)


    useEffect(()=>{
        setInterval(() => {
            dispatch(updateTime()); 
        }, 1000);
    })
    return <div>
        <CurrentDate date={new Date(JSON.parse(currentDate))}/>
        {'  '}
        <Time time={new Date(JSON.parse(currentDate))}/>
    </div>
}