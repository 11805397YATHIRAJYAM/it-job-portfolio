import React from 'react';
export default function Footer() {
  return (
<footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">G<span>.</span></span><span className="brand-name">PORTFOLIO<span> / DEVELOPER</span></span></a><p>Designed & built with curiosity. © {new Date().getFullYear()}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
  );
}
