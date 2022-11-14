import { useState, useEffect } from "react";
import {lineColours} from "../../resources/lineColours";
import "./directRoute.css"

export function DirectRoutes(props) {

    const [ tubeLines, setTubeLines ] = useState([]);
    const [ busRoutes, setBusRoutes ] = useState([]);
    // splits the directRoutes prop array into tube lines and bus routes when the component mounts.
    useEffect(() => {
        setTubeLines(props.directRoutes.filter(item => item.length >= 6));
        setBusRoutes(props.directRoutes.filter(item => item.length < 6));
    }, [props.directRoutes])

    if(props.directRoutes.length){
        return(
        <>
            {/* maps the tube lines to individual divs and displays each one with the correct colour, imported from the lineColours object. */}
            {tubeLines.map((line, index) => 
                <div className="line-div" key={index} style={{backgroundColor: `${lineColours[line]}`}}>
                    <p className="line-p">{`${line}`}</p>
                </div>)}
                <div>{`The following direct bus routes are also available: ${busRoutes}`}</div>
        </>)
    }else {
        return <div>There is no direct route</div>
    }
}