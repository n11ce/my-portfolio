export default function TimelineDots( {TimelineObj} ){

    return(
        <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>{ TimelineObj.Datee }</h3>
          <p>{ TimelineObj.Title }</p>
          <p className="text-warning">{ TimelineObj.Place }</p>
        </div>
      </div>
    );
}