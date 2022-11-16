import "./path.css";
import { pathColour } from "../../../../resources/pathColour";

export function Path(props) {
    return (
        <div className="path">
            {props.pathArray ? props.pathArray.map((e, i) => <p key={i} className="stop-point" style={{color: `${pathColour[props.line]}`}}>{e.name.replace("Underground Station", "")}</p>) : <p>I'm a path</p>}
        </div>
    )
}