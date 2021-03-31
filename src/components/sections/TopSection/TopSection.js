import React from "react";
import "./sections.css";

const TopSection = (props) => {
  const style = {
    background: `url(${props.bg_src}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <section className="section_first" style={style}>
      <div className="filter">
        <div className="container">
          <h1 className="main-text">underline your personality</h1>
          <h6 className="tempoparry-text">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitatio.
          </h6>
          <a href='#' className="shop-link">Shop now! </a>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
