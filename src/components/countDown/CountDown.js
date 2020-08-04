import React from 'react'
import Digit from './digit/Digit'


const CountDown = (props) => {
    return(
        <div className="d-flex text-center mt-5">
            <Digit color="palegreen" value={props.time.min}/>
            <Digit color="skyblue" value={props.time.sec}/>
            <Digit color="salmon" value={props.time.mili}/>
            
        </div>
    )
}
export default CountDown