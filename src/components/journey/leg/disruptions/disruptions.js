import "./disruptions.css";

export function Disruptions(props) {
    return (
        <div className="disruption">
            {props.disruptionArray ? props.disruptionArray.map((e, i) => <p key={i}>{e.description}</p>) : <p></p>}
        </div>
    )
}