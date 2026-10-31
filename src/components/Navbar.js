import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']];
  return (
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">G<span>.</span></span><span className="brand-name">PORTFOLIO<span> / DEVELOPER</span></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
      </header>
  );
}
