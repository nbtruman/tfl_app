import "./path.css";

export function Path(props) {
    return (
        <div className="path">
            {props.pathArray ? props.pathArray.map((e, i) => <p key={i} className="stop-point">{e.name.replace("Underground Station", "")}</p>) : <p>I'm a path</p>}
        </div>
    )
}