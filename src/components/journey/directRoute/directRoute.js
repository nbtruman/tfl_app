import { useState, useEffect } from "react";
// import {lineColours} from "../../resources/lineColours";

export function DirectRoutes(props) {

    const [ line, setLine ] = useState([]);

    useEffect(() => {
        setLine(props.routes[0].routeOptions[0].name);
    }, [props.routes])

    if(props.routes === 1){
        return <p className="text-block">There is a direct route available on the <span>{line}</span> line.</p>
    }else{
        return <p className="text-block">Your journey has {props.routes.length - 1} change{props.routes.length === 2 ? "" : "s"}</p>
    }
    
}
