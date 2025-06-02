import SertifikalarGrid from "./SertifikalarGrid";

export default function Sertifikalar(){

    const veriler = [
        {
            title: "Otonom Sürüş Teknolojileri Temel Eğitim",
            issuer: "T.C. Sanayi ve Teknoloji Bakanlığı",
            datee: "Kasım 2024 - Aralık 2024",
            id: "23065483426054",
            yetenekler: [
                {title: "Otonom Sürüş"},
                {title: "Teknoloji"}
            ]

        },
        {
            title: "Combating Marine and River Pollution with Power of Young People",
            issuer: "Youthpass",
            datee: "Eylül 2024",
            id: "ZVXT-3RVA-W3LK-6F7E",
            yetenekler: [
                {title: "İngilizce"},
                {title: "Çevre"},
                {title: "Gençlik"}
            ]

        }
    ]

    return(
        <section id="sertifikalar" className="py-5 bg-black">
            <div className="container">
                <h2 className="section-title mb-5">
                <span className="text-primary">public</span>{" "}
                <span className="text-warning">Sertifikalar</span> {"{"}
                </h2>
                <div className="row g-4">
                    {veriler.map((v, index) => (
                    <SertifikalarGrid key={index} SertifikalarGridObj={v} />
                    ))}
                </div>
                <h2 className="mt-4">{"}"}</h2>
            </div>
        </section>
    );
}