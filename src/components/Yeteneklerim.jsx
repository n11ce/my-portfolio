import YeteneklerGrid from "./YeteneklerGrid";

export default function Yetenekler(){

    const veriler = [
        {
            title: "Backend Geliştirme",
            desc: "PHP, CodeIgniter, Python ve C# ile güçlü backend çözümleri",
            icon: "bi-code-square"
        },
        {
            title: "Frontend Geliştirme",
            desc: "Modern React, HTML5 ve CSS3 ile responsive tasarımlar",
            icon: "bi-window"
        },
        {
            title: "Veritabanı",
            desc: "MySQL, Firebase veritabanı yönetimi",
            icon: "bi-database"
        },
    ]


    return(

        <section id="yetenekler" className="py-5 bg-black">
  <div className="container">
    <h2 className="section-title mb-5">
      <span className="text-primary">private</span>{" "}
      <span className="text-warning">Yetenekler</span> {"{"}
    </h2>
    <div className="row g-4">
                  {veriler.map((v, index) => (
                    <YeteneklerGrid key={index} YeteneklerGridObj={v} />
                  ))}
      
    </div>
    <h2 className="mt-4">{"}"}</h2>
  </div>
</section>

    );
}