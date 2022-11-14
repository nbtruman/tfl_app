import { lineColours } from "../../../resources/lineColours";

export function Leg(props){
    return (
        <div className="line-div" style={{backgroundColor: `${lineColours[props.information.routeOptions[0].name.toLowerCase()]}`}}>
            <p className="line-p">{`${props.information.instruction.summary}`}</p>
        </div>
    )
}