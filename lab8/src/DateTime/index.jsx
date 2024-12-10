import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateTime } from "../Store";
import CurrentDate from "./Current/CurrentDate";
import Time from "./Current/CurrentTime";

// function DateTime({currentTime, updateTime}) {
//     useEffect(()=>{
//         setInterval(() => {
//             updateTime(); 
//         }, 1000);
//     })
//     return <div>
//         <CurrentDate date={currentTime}/>
//         {'  '}
//         <Time time={currentTime}/>
//     </div>
// }

// const mapStateToProps = (state) => ({
//     currentTime: state.date.value,
// });

// const mapDispatchToProps = {
//     updateTime,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DateTime);

export default function DateTime() {
    const dispatch = useDispatch();
    const currentDate = useSelector((state)=>state.date.value)


    useEffect(()=>{
        setInterval(() => {
            dispatch(updateTime()); 
        }, 1000);
    })
    return <div>
        <CurrentDate date={currentDate}/>
        {'  '}
        <Time time={currentDate}/>
    </div>
}