import React from "react";
import MatrixConsole from "./MatrixConsole";

export default function İletisim() {
  return (
    <section id="iletisim" className="py-5">
      <div className="container">
        <h2 className="section-title mb-5">
          <span className="text-primary">public</span>{" "}
          <span className="text-warning">İletişim</span> {"{"}
        </h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <MatrixConsole />
            
          </div>
        </div>
        <h2>{"}"}</h2>
      </div>
    </section>
  );
}
