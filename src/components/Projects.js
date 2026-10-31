import React from 'react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
export default function Projects() {
  return (
        <section className="section-wrap projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div><div className="section-heading-row"><h2>Projects built<br/><span className="muted-heading">with purpose.</span></h2><p className="section-lead">Practical applications that demonstrate my learning across the development stack.</p></div>
          <div className="projects-list">{projects.map(project=><article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-content"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-highlight"><CheckCircle2 size={15}/>{project.highlight}</div></div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.name}`}><Github size={18}/></a>{project.live ? <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.name}`}><ExternalLink size={18}/></a> : <span className="link-placeholder" title="Add your live demo URL"><ExternalLink size={18}/></span>}</div></article>)}</div>
          <p className="project-note"><span>*</span> Add your actual GitHub repository and live demo URLs before publishing.</p>
        </section>
  );
}
