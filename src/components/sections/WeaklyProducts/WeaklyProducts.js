import React from "react";
import Card from "../../Card/Card";
import "./WeaklyProducts.css";

const WeaklyProducts = () => {
  return (
    <section className="weakly-products">
      <h2>WEEKLY FEATURED PRODUCTS</h2>
      <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </div>
    </section>
  );
};

export default WeaklyProducts;
