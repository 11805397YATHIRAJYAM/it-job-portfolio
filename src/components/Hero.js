import React from 'react';
import { ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react';
export default function Hero() {
  return (
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M A</p>
            <h1>MERN Stack<br/><span className="gradient-text">Developer.</span></h1>
            <p className="hero-intro">I build responsive, user-focused web applications — from thoughtful interfaces to reliable backend services.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <Mail size={16}/></a></div>
            <div className="hero-meta"><span><MapPin size={14}/> India</span><span className="meta-divider"/><span>Fresher · Open to IT roles</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="code-top-right">JS</span></div>
              <div className="code-content">
                <div><span className="ln">01</span><span className="purple">const</span> <span className="cyan">developer</span> = {'{'}</div>
                <div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="green">'Your Name'</span>,</div>
                <div><span className="ln">03</span>&nbsp;&nbsp;role: <span className="green">'MERN Developer'</span>,</div>
                <div><span className="ln">04</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'Clean UI'</span>,</div>
                <div><span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'Scalable APIs'</span></div>
                <div><span className="ln">07</span>&nbsp;&nbsp;],</div>
                <div><span className="ln">08</span>&nbsp;&nbsp;learning: <span className="orange">true</span></div>
                <div><span className="ln">09</span>{'}'};</div>
                <div className="code-cursor">
  <span className="ln">10</span>
  <span className="green">{'// Always building something.'}</span>
  <b>_</b>
</div>
              </div>
              <div className="code-footer"><span><span className="status-dot"/> Ready to build</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
            <div className="floating-chip chip-node"><span>⬡</span> Node.js</div>
            <div className="floating-chip chip-mongo"><span>◈</span> MongoDB</div>
            <div className="visual-caption"><Sparkles size={14}/> Turning ideas into applications</div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>
  );
}
