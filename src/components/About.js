import React from 'react';
export default function About() {
  return (
        <section className="section-wrap about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="section-heading-row"><h2>Curious mind.<br/><span className="muted-heading">Builder's mindset.</span></h2><p className="section-lead">I enjoy solving problems with code and turning ideas into useful digital experiences.</p></div>
          <div className="about-grid">
            <div className="about-main"><p className="large-copy">I'm an aspiring <strong>MERN Stack Developer</strong> focused on creating modern web applications with clean interfaces and practical functionality.</p><p>I bring hands-on project experience across frontend development, backend APIs, database integration and deployment workflows. I value readable code, continuous learning and collaboration.</p><p>I'm looking for an opportunity to contribute to a development team, learn from experienced engineers and grow by building products that make a difference.</p></div>
            <div className="about-facts"><div className="fact"><span className="fact-number">03</span><span className="fact-label">Featured projects</span></div><div className="fact"><span className="fact-number">MERN</span><span className="fact-label">Primary stack</span></div><div className="fact"><span className="fact-number">∞</span><span className="fact-label">Curiosity to learn</span></div></div>
          </div>
        </section>
  );
}
