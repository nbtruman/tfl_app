import { useState, useEffect } from "react";
import {Path} from "./path/path";
import { lineColours } from "../../../resources/lineColours";
import "./leg.css"

export function Leg(props){
    const [ path, setPath ] = useState();

    useEffect(() => {
        setPath(props.information.path.stopPoints)
    }, [props.information.path.stopPoints])

    return (
        <div className="line-div" style={{backgroundColor: `${lineColours[props.information.routeOptions[0].name.toLowerCase()]}`}}>
            <p className="line-p">{`${props.information.instruction.summary}`}</p>
            <div>
                <Path pathArray={path}/>
            </div>            
        </div>
    )
}