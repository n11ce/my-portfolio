import React from "react";

export default function Footer() {
  // Sabit tarihi belirliyoruz (08/09/2019)
  const fixedDate = new Date(2019, 8, 8); // JavaScript'te aylar 0'dan başlar (Ağustos = 7, Eylül = 8)

  // Bugünün tarihi
  const today = new Date();

  // İki tarih arasındaki farkı hesaplıyoruz
  const years = today.getFullYear() - fixedDate.getFullYear();
  const months = today.getMonth() - fixedDate.getMonth();
  const days = today.getDate() - fixedDate.getDate();

  // Eğer ay farkı negatifse, yıl farkını bir azaltıyoruz
  const adjustedMonths = months < 0 ? months + 12 : months;
  const adjustedYears = months < 0 ? years - 1 : years;

  return (
    <footer className="py-4 text-center">
      <div className="container">
        <div
          className="social-icons"
          style={{ marginBottom: 0, justifyContent: "center" }}
        >
          <a
            href="mailto:huseyinnn0053@gmail.com"
            target="_blank"
            className="social-icon"
          >
            <i className="bi bi-envelope-heart-fill" />
          </a>
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
      <div className="contanier pt-2" style={{ borderTop: "1px solid #333" }}>
        <p className="mb-0">
          <span className="text-primary">&lt;span&gt;</span>Hüseyin Şeker
          <span className="text-primary">&lt;/span&gt;</span>
          <span className="text-primary">
            <br />
            &lt;span&gt;
          </span>
          Sevgi ile yapıldı.{" "}
          <span className="text-primary">&lt;/span&gt;</span>
          <br />
          <span className="text-warning">
            {adjustedYears} yıl {adjustedMonths} ay {days} gün...
          </span>
        </p>
      </div>
    </footer>
  );
}
