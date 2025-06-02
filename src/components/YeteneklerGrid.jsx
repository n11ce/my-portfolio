export default function YeteneklerGrid( {YeteneklerGridObj} ){

    return(
        <div className="col-md-4">
        <div className="skill-card">
        <i className={`bi ${YeteneklerGridObj.icon} text-primary display-4`} />
        <h3>{ YeteneklerGridObj.title }</h3>
          <p> {YeteneklerGridObj.desc} </p>
        </div>
      </div>
    );
}