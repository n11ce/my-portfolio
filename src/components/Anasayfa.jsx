import TypingEffect from "./TypingEffect";

export default function Anasayfa(){
    return(
        <section id="anasayfa" className="hero-section">
  <div className="container">
    <div className="row min-vh-100">
      <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
        <div className="hero-text">
          <h1 className="display-1 fw-bold mb-4">
            <span className="text-primary">public</span>{" "}
            <span className="text-light">class</span>{" "}
            <span className="text-warning">Merhaba </span>
            {"{"}
          </h1>
          <div className="typing-container mb-4">
            <span className="text-warning">&lt;?=</span>
            <span className="text-success">"</span>
            <span id="typing-text">
                <TypingEffect/>
            </span>
            <span className="text-success">"</span>
            <span className="text-warning">?&gt;</span>
          </div>
          <p className="lead mb-4">
            Atatürk Üniversitesi Bilgisayar Mühendisliği mezunu, tutkulu bir
            yazılım geliştiricisi. Modern teknolojileri kullanarak yenilikçi
            çözümler üretmeyi hedefliyorum.
          </p>
          <div className="d-flex gap-3">
            <a href="#projeler" className="btn btn-primary btn-lg">
              Projelerimi Gör
            </a>
            <a href="#iletisim" className="btn btn-outline-light btn-lg">
              İletişime Geç
            </a>
          </div>
          <h2 className="mt-4">{"}"}</h2>
        </div>
      </div>
      <div className="col-12 col-lg-7 d-flex align-items-center">
        <div className="code-container">
          <div className="code-line">
            <span className="text-primary">&nbsp;class</span>{" "}
            <span className="text-light">HuseyinSeker</span> {"{"}
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;private</span>{" "}
            <span className="text-light">String</span>{" "}
            <span className="text-warning">name</span> ={" "}
            <span className="text-success">"Hüseyin"</span>;
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;private</span>{" "}
            <span className="text-light">String</span>{" "}
            <span className="text-warning">surname</span> ={" "}
            <span className="text-success">"Şeker"</span>;
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;private</span>{" "}
            <span className="text-light">Integer</span>{" "}
            <span className="text-warning">age</span> ={" "}
            <span className="text-success">23</span>;
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;private</span>{" "}
            <span className="text-light">String</span>{" "}
            <span className="text-warning">job</span> ={" "}
            <span className="text-success">"Bilgisayar Mühendisi"</span>;
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;private</span>{" "}
            <span className="text-light">String</span>{" "}
            <span className="text-warning">university</span> ={" "}
            <span className="text-success">"Atatürk Üniversitesi"</span>;
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;public</span>{" "}
            <span className="text-light">void</span>{" "}
            <span className="text-warning">code</span>() {"{"}
          </div>
          <div className="code-line">
            <span className="text-primary">&nbsp;&nbsp;&nbsp;&nbsp;while</span>(
            <span className="text-light">true</span>) {"{"}
          </div>
          <div className="code-line">
            <span className="text-light">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createAwesomeProjects();
            </span>
          </div>
          <div className="code-line">
            <span className="text-light">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learnNewTechnologies();
            </span>
          </div>
          <div className="code-line">
            <span className="text-light">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solveProblems();
            </span>
          </div>
          <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
          <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
          <div className="code-line">&nbsp;{"}"}</div>
        </div>
      </div>
    </div>
  </div>
  <div className="floating-elements">
    <div className="floating-element">PHP</div>
    <div className="floating-element">CodeIgniter 3</div>
    <div className="floating-element">CodeIgniter 4</div>
    <div className="floating-element">HTML5</div>
    <div className="floating-element">CSS</div>
    <div className="floating-element">JavaScript</div>
    <div className="floating-element">Python</div>
    <div className="floating-element">C#</div>
    <div className="floating-element">MVC Mimarisi</div>
    <div className="floating-element">R Programlama</div>
    <div className="floating-element">MySQL</div>
  </div>
</section>

    );
}