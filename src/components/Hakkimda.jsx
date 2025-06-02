import YeteneklerimDots from "./YeteneklerimDots";

export default function Hakkimda(){


  const Yeteneklerim = [
    {
      title: "PHP"
    },
    {
      title: "CodeIgniter 3"
    },
    {
      title: "CodeIgniter 4"
    },
    {
      title: "React"
    },
    {
      title: "HTML5"
    },
    {
      title: "CSS"
    },
    {
      title: "JavaScript"
    },

    {
      title: "Python"
    },
    {
      title: "C#"
    },
    {
      title: "MVC Mimarisi"
    },
    {
      title: "R Programlama"
    },
    {
      title: "MySQL"
    },
    {
      title: "PHPmyAdmin"
    },
  ];

    return(
        <section id="hakkimda" className="py-5">
  <div className="container">
    <h2 className="section-title mb-5">
      <span className="text-primary">public</span>{" "}
      <span className="text-warning">Hakkımda</span> {"{"}
    </h2>
    <div className="row">
      <div className="col-lg-6">
        <p className="lead">
          Merhaba! Ben Hüseyin Şeker, Atatürk Üniversitesi Bilgisayar
          Mühendisliği mezunuyum. Yazılım geliştirme konusunda tutkulu bir
          mühendis olarak, modern teknolojileri kullanarak yenilikçi çözümler
          üretmeyi hedefliyorum.
        </p>
        <div className="social-icons mt-3">
          <a
            href="https://github.com/n11ce"
            target="_blank"
            className="social-icon"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/huseyinsekerr/"
            target="_blank"
            className="social-icon"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="tech-stack">
          <h3 className="mb-4">
            <span className="text-primary">//</span> Yeteneklerim
          </h3>
          <div className="d-flex flex-wrap gap-2">
                      {Yeteneklerim.map((y, index) => (
                        <YeteneklerimDots key={index} yeteneklerObj={y} />
                      ))}
          </div>
        </div>
      </div>
    </div>
    <h2 className="mt-4">{"}"}</h2>
  </div>
</section>


    );
}