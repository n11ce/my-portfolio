export default function ProjelerGrid( {ProjelerGridObj}){


    return(
      <>
        <div className="col-md-6 col-lg-4">
        <div className="project-card">
          <div className="project-content">
            <h3> {ProjelerGridObj.title} </h3>
            <p> {ProjelerGridObj.desc} </p>
            <div className="project-tech">
                {ProjelerGridObj.yetenekler.map((y, index) => (
                    <span key={index} className="badge bg-primary">
                    {y.title}
                    </span>
                ))}
            </div>
            <a
              href= {ProjelerGridObj.github}
              target="_blank"
              className="btn btn-outline-light mt-3"
            >
              GitHub'da Gör
            </a>
          </div>
        </div>
      </div>
      </>
    );
}