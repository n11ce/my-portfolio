import { useState } from "react";
import ProjelerGrid from "./ProjelerGrid";
import { motion, AnimatePresence } from "framer-motion";


export default function Projeler() {
  const veriler = [
    {
      title: "Makine Öğrenmesi ve Veri Analizi",
      desc: "R programlama dili kullanarak veri setlerini analiz ettim ve makine öğrenmesi modellerini uyguladım. Derin öğrenme algoritmaları ile tahmin modelleri geliştirdim.",
      yetenekler: [
        { title: "R Programlama" },
        { title: "Makine Öğrenmesi" },
        { title: "Veri Analizi" }
      ],
      github: "https://github.com/n11ce/Machine-Learning-in-R"
    },
    {
      title: "PID Kontrolcüsü",
      desc: "Matlab kullanarak PID kontrolcüsü tasarladım ve optimize ettim. Sistemin performansını artırmak için parametre optimizasyonu gerçekleştirdim.",
      yetenekler: [
        { title: "Matlab" },
        { title: "PID Kontrol" },
        { title: "Sistem Optimizasyonu" }
      ],
      github: "https://github.com/n11ce/PID-Controller"
    },
    {
      title: "Kütüphane Otomasyonu",
      desc: "C# ve MySQL kullanarak kapsamlı bir kütüphane yönetim sistemi geliştirdim. Kitap takibi, üye yönetimi ve raporlama özellikleri içeriyor.",
      yetenekler: [
        { title: "C#" },
        { title: "MySQL" },
        { title: "Masaüstü Uygulama" }
      ],
      github: "https://github.com/n11ce/Library-Automation-Project-Using-C-and-Microsoft-SQL"
    },
    {
      title: "Etkinlik Uygulaması",
      desc: "Kotlin ve Firebase kullanarak gerçek zamanlı etkinlik yönetim uygulaması geliştirdim. Kullanıcı etkileşimi ve bildirim sistemi içeriyor.",
      yetenekler: [
        { title: "Kotlin" },
        { title: "Firebase" },
        { title: "Android" }
      ],
      github: "https://github.com/n11ce/seker-event-mobile-kotlin"
    },
    {
      title: "Python Veri Analizi",
      desc: "Python programlama dili kullanarak veri setlerinin analizini gerçekleştirdim. Makine öğrenmesi ve derin öğrenme algoritmaları ile veri madenciliği ve tahmin modelleri geliştirdim.",
      yetenekler: [
        { title: "Python" },
        { title: "Veri Analizi" },
        { title: "Makine Öğrenmesi" },
        { title: "Derin Öğrenme" }
      ],
      github: "https://github.com/n11ce/Python-machine-learning-and-deep-learning"
    }
  ];

  const [index, setIndex] = useState(0);
  const visibleData = veriler.slice(index, index + 3);

  function onceki() {
    if (index > 0) setIndex(index - 1);
  }

  function sonraki() {
    if (index + 3 < veriler.length) setIndex(index + 1);
  }

  return (
    <section id="projeler" className="py-5">
      <div className="container">
        <h2 className="section-title mb-5">
          <span className="text-primary">public</span>{" "}
          <span className="text-warning">Projeler</span> {"{"}
        </h2>
        <div className="row g-4">
          <div className="col-12 text-end">
            <a onClick={onceki} style={{ cursor: "pointer" }}>
              <i className="bi bi-arrow-left me-2"></i>
            </a>
            <a onClick={sonraki} style={{ cursor: "pointer" }}>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* Buradaki div'e key={index} eklendi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="row g-4 w-100 d-flex"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {visibleData.map((v, i) => (
                  <ProjelerGrid ProjelerGridObj={v} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <h2 className="mt-4">{"}"}</h2>
      </div>
    </section>
  );
}

