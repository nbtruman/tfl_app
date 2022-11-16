import { useState, useEffect } from "react";
import {Path} from "./path/path";
import { Disruptions } from "./disruptions/disruptions";
import { lineColours } from "../../../resources/lineColours";
import "./leg.css"

export function Leg(props){
    const [ path, setPath ] = useState();
    const [ disruption, setDisruption ] = useState();
    const [ hidden, setHidden ] = useState(true);

    useEffect(() => {
        setPath(props.information.path.stopPoints);
        setDisruption(props.information.disruptions);
    }, [props.information.path.stopPoints, props.information.disruptions]);

    const toggleHidden = () => {
        setHidden(!hidden);
    }

    return (
        <div    className="line-div" 
                style={{backgroundColor: `${lineColours[props.information.routeOptions[0].name.toLowerCase()]}`}}
                onClick={toggleHidden}>
            <p className="line-p">{`${props.information.instruction.summary}`}</p>
            <div className={hidden ? "hideDetail" : "showDetail"}>
                <Path pathArray={path}/>
                <Disruptions disruptionArray={disruption} />
            </div>            
        </div>
    );
};