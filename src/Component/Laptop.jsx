import React from "react";
import ItemLT from "./ItemLT";

export default function Laptop() {
  return (
    <div>
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <ItemLT />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <ItemLT />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <ItemLT />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <ItemLT />
          </div>
        </div>
      </section>
    </div>
  );
}
