import { useState, useEffect } from "react";

export function DirectRoutes(props) {
    if(props.directRoutes.length){
        return <div>{`There is a direct route: ${props.directRoutes}`}</div>
    }else {
        return <div>There is no direct route</div>
    }
}