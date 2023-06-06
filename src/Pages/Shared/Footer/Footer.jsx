import React from "react";
import bgIMG from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <section style={{ background: `url(${bgIMG})`, backgroundSize: "contain" }}>
      <footer className="footer py-20 px-4 justify-items-center gap-32">
        <div className="">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <p className="text-center mb-6">Copyright 2023 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
