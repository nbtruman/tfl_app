import "./path.css";

export function Path(props) {
    return (
        <div>
            {props.pathArray ? props.pathArray.map((e, i) => <p key={i} className="stop-point">{e.name.slice(0, -19)}</p>) : <p>I'm a path</p>}
        </div>
    )
}