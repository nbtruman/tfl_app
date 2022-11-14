import { useState, useEffect } from "react";
// import {lineColours} from "../../resources/lineColours";

export function DirectRoutes(props) {

    const [ line, setLine ] = useState();

    useEffect(() => {
        setLine(props.routes[0].routeOptions[0].name);
    }, [])

    return <p>There is a direct route available on the <span>{line}</span> line.</p>
}
