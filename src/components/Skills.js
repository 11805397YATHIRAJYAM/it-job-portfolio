import React from 'react';
import { Globe, Server, Database, Terminal } from 'lucide-react';
import { skills } from '../data/portfolioData';
const icons = { globe: Globe, server: Server, database: Database };
export default function Skills() {
  return (
        <section className="section-wrap skills-section" id="skills">
          <div className="section-label">02 / TECH STACK</div><div className="section-heading-row"><h2>Tools I use to<br/><span className="muted-heading">make things work.</span></h2><p className="section-lead">A growing toolkit for building complete, responsive web experiences.</p></div>
          <div className="skills-grid">{skills.map(({group, iconName, items}) => <article className="skill-card" key={group}><div className="skill-card-head"><span className="skill-icon">{(() => { const Icon = icons[iconName]; return <Icon size={20}/>; })()}</span><span className="skill-index">0{skills.findIndex(s=>s.group===group)+1}</span></div><h3>{group}</h3><div className="skill-tags">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
          <div className="learning-strip"><Terminal size={17}/><span><strong>Currently growing:</strong> writing better APIs, improving code quality and learning software engineering best practices.</span></div>
        </section>
  );
}
