export default function SertifikalarGrid( {SertifikalarGridObj} ){

    return(
        <div className="col-md-6">
        <div className="certificate-card">
          <div className="certificate-content">
            <h3> {SertifikalarGridObj.title} </h3>
            <div className="certificate-info">
              <p className="issuer"> {SertifikalarGridObj.issuer} </p>
              <p className="date"> {SertifikalarGridObj.datee} </p>
              <p className="id">Yeterlilik Kimliği: {SertifikalarGridObj.id}</p>
            </div>
            <div className="certificate-tech">
                {SertifikalarGridObj.yetenekler.map((y, index) => (
                    <span key={index} className="badge bg-primary">
                    {y.title}
                    </span>
                ))}
            </div>
          </div>
        </div>
        </div>
    );
}