import TimelineDots from "./TimelineDots";

export default function Timeline() {
  const tarihVerileri = [
    {
      Datee: "2002",
      Title: "Dünyaya geldim :) ",
      Place: "Rize/Merkez"
    },
    {
      Datee: "2012",
      Title: "İlk web sitesini geliştirdim.",
      Place: ""
    },
    {
      Datee: "2021",
      Title: "Bilgisayar Mühendisliği bölümünde lisans eğitimine başladım.",
      Place: "Atatürk Üniversitesi"
    },
    {
      Datee: "2021",
      Title: "Web alanında hizmet vermeye başladım.",
      Place: "Freelance"
    },
    {
      Datee: "2025",
      Title: "Daynex Firmasında 5 ay boyunca staj yaptım. Codeignite 3, Bootstrap 5, Html, CSS alanlarında çalışmalar yaptım.",
      Place: "Trabzon/Yomra"
    },
    {
      Datee: "2025",
      Title: "Bilgisayar Mühendisliği'nden mezun oldum",
      Place: "Atatürk Üniversitesi"
    },
  ];

  return (
    <section id="timeline" className="py-5 bg-black">
      <div className="container">
        <h2 className="section-title mb-5">
          <span className="text-primary">public</span>{" "}
          <span className="text-warning">Zaman Çizelgesi</span> {"{"}
        </h2>
        <div className="timeline">
          {tarihVerileri.map((t, index) => (
            <TimelineDots key={index} TimelineObj={t} />
          ))}
        </div>
        <h2 className="mt-4">{"}"}</h2>
      </div>
    </section>
  );
}
