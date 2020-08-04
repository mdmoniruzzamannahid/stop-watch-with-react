import React, { Component } from 'react'

const Laps = (props) =>{
    return(
        <ul className="list-group list-item-flush">
            {props.laps.map((lap, index)=>{
                return(
                    <li key={index} className="list-group-item">
                            <h4>
                                <span className="text-dark">Minute: </span>
                                <span className="text-danger">{ lap.min } </span>
                                <span className="text-dark">Sec: </span>
                                <span className="text-danger">{ lap.sec } </span>
                                <span className="text-dark">mili: </span>
                                <span className="text-danger">{ lap.mili } </span>
                            </h4>
                        </li>
                )
            })}
        </ul>
    )
}
export default Laps