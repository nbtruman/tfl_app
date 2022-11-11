import { useState, useEffect } from "react";
import {lineColours} from "../resources/lineColours";

export function DirectRoutes(props) {

    // display the line with a css class property equal to the string value of the line. The css classes will be stored in an object that can be imported in.
    // display the bus routes.
    const [ tubeLines, setTubeLines ] = useState([]);
    const [ busRoutes, setBusRoutes ] = useState([]);

    useEffect(() => {
        setTubeLines(props.directRoutes.filter(item => item.length >= 6));
        setBusRoutes(props.directRoutes.filter(item => item.length < 6));
    }, [props.directRoutes])

    if(props.directRoutes.length){
        return(
        <>
            {tubeLines.map((line, index) => <div style={{backgroundColor: `${lineColours[line]}`}}>{`${line}`}</div>)}
            <div>{`The following direct bus routes are also available: ${busRoutes}`}</div>
        </>)
    }else {
        return <div>There is no direct route</div>
    }
}