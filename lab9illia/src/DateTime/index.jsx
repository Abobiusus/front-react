import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateTime } from "../Store";
import CurrentDate from "./Current/CurrentDate";
import Time from "./Current/CurrentTime";

function DateTime({currentTime, updateTime}) {
    useEffect(()=>{
        setInterval(() => {
            updateTime(); 
        }, 1000);
    }, [updateTime])

    return <div>
        <CurrentDate date={new Date(JSON.parse(currentTime))}/>
        {'  '}
        <Time time={new Date(JSON.parse(currentTime))}/>
    </div>
}

const mapStateToProps = (state) => ({
    currentTime: state.date.value,
});

const mapDispatchToProps = {
    updateTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);
