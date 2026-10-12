import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Award, Check, Code2, Download, ExternalLink, GraduationCap, Mail, MapPin, Menu, Moon, Sun, Terminal, X, GitBranch, Cpu, Layers3, BriefcaseBusiness, Send, BrainCircuit } from 'lucide-react'
import data from './data/portfolio.json'

type Theme = 'dark' | 'light'
type Project = (typeof data.projects)[number]
const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

function Github({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.75.5 12.23c0 5.18 3.3 9.57 7.87 11.12.58.11.79-.26.79-.57v-2.19c-3.2.71-3.87-1.4-3.87-1.4-.53-1.38-1.28-1.75-1.28-1.75-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.81 2.7 1.29 3.36.99.1-.76.4-1.29.73-1.59-2.56-.3-5.25-1.31-5.25-5.83 0-1.29.45-2.34 1.19-3.16-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.17 1.21a10.9 10.9 0 0 1 5.77 0C17.12 4.91 18.1 5.23 18.1 5.23c.63 1.62.23 2.82.11 3.12.74.82 1.18 1.87 1.18 3.16 0 4.53-2.7 5.53-5.27 5.82.41.37.78 1.08.78 2.18v3.25c0 .31.21.68.8.56 4.56-1.55 7.86-5.94 7.86-11.11C23.56 5.75 18.4.5 12 .5z" /></svg>
}
function Linkedin({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55C22 2.69 21.31 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.7A1.75 1.75 0 1 1 6.5 4.2a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.56V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19Z" /></svg>
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme-override')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [copied, setCopied] = useState(false)
  const [avatarPhotoFailed, setAvatarPhotoFailed] = useState(false)
  const [avatarPlaceholderFailed, setAvatarPlaceholderFailed] = useState(false)
  const categories = useMemo(() => ['All', ...Array.from(new Set(data.projects.map((project) => project.category)))], [])
  const filteredProjects: Project[] = activeFilter === 'All' ? data.projects : data.projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    setAvatarPhotoFailed(false)
    setAvatarPlaceholderFailed(false)
  }, [theme])

  useEffect(() => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)')
    const followSystemPreference = (event: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('portfolio-theme-override')
      if (savedTheme !== 'light' && savedTheme !== 'dark') {
        setTheme(event.matches ? 'light' : 'dark')
      }
    }

    systemPreference.addEventListener('change', followSystemPreference)
    return () => systemPreference.removeEventListener('change', followSystemPreference)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('portfolio-theme-override', nextTheme)
    setTheme(nextTheme)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = data.links.email
    }
  }
  const closeMenu = () => setMenuOpen(false)
  const resumeUrl = import.meta.env.BASE_URL + 'Yash-Kesharwani-Resume.pdf'
  const profileImage = import.meta.env.BASE_URL + (theme === 'dark' ? 'profile-dark.jpg' : 'profile-light.jpg')
  const profileFallbackImage = import.meta.env.BASE_URL + (theme === 'dark' ? 'profile-dark.svg' : 'profile-light.svg')

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Yash Kesharwani home" onClick={closeMenu}><span className="brand-mark">YK<span>.</span></span><span className="brand-copy">Yash Kesharwani<small>Software Engineer I</small></span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {[['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="mobile-resume" href={resumeUrl} download><Download size={15} /> Resume</a>
        </nav>
        <div className="top-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="status-dot" /> SOFTWARE ENGINEER · PUNE, INDIA</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>Building reliable<br />software for the <span className="accent-text">real world.</span></motion.h1>
            <motion.p className="hero-lead" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .16 }}>Hey, I'm <strong>{data.name}</strong> — a Software Engineer I working across backend development, cloud tooling and infrastructure automation.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .24 }}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="button button-secondary" href={resumeUrl} download><Download size={16} /> Download resume</a>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              <a href={data.links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href={data.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a><a href={data.links.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ArrowUpRight size={13} /></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>
            <div className="visual-topline"><span className="window-dots"><i /><i /><i /></span><span className="mono">profile.tsx</span><span className="visual-live"><span className="status-dot" /> ENGINEERING MODE</span></div>
            <div className="visual-profile-avatar" role="img" aria-label="Profile image">
              {!avatarPhotoFailed
                ? <img key={`photo-${theme}`} src={profileImage} alt={data.name + ' profile'} onError={() => setAvatarPhotoFailed(true)} />
                : !avatarPlaceholderFailed
                  ? <img key={`placeholder-${theme}`} src={profileFallbackImage} alt="Illustrated profile placeholder" onError={() => setAvatarPlaceholderFailed(true)} />
                  : <span className="avatar-fallback">YK</span>}
              <span className="avatar-status" aria-hidden="true" />
            </div>
            <div className="code-window">
              <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span>&nbsp;<span className="code-blue">engineer</span>&nbsp;= {'{'}</div>
              <div className="code-line indent"><span className="code-green">name</span>: <span className="code-yellow">'Yash Kesharwani'</span>,</div>
              <div className="code-line indent"><span className="code-green">role</span>: <span className="code-yellow">'Software Engineer I'</span>,</div>
              <div className="code-line indent"><span className="code-green">focus</span>: [</div>
              <div className="code-line indent double"><span className="code-yellow">'Backend systems'</span>,</div><div className="code-line indent double"><span className="code-yellow">'Cloud & automation'</span>,</div><div className="code-line indent double"><span className="code-yellow">'Clean code'</span></div>
              <div className="code-line indent">],</div><div className="code-line indent"><span className="code-green">learning</span>: <span className="code-purple">true</span>,</div><div className="code-line">{'}'}<span className="cursor">_</span></div>
            </div>
            <div className="visual-footer"><div className="visual-footer-icon"><Terminal size={17} /></div><div><strong>Build · Automate · Improve</strong><span>Curious mind, engineering mindset.</span></div></div>
            <div className="floating-chip chip-java"><span className="chip-icon">J</span><span><strong>Java + Spring</strong><small>Backend engineering</small></span></div>
            <div className="floating-chip chip-cloud"><span className="chip-icon cloud-icon"><Layers3 size={17} /></span><span><strong>Cloud & DevOps</strong><small>Automation first</small></span></div>
          </motion.div>
          <div className="hero-bottomline"><span><MapPin size={14} /> {data.location}</span><span className="scroll-hint">SCROLL TO EXPLORE <span className="scroll-rule" /></span></div>
        </section>

        <section className="stats-strip section-wrap" aria-label="Highlights">{data.stats.map((stat, index) => <motion.div className="stat-item" key={stat.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * .08 }}><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></motion.div>)}</section>

        <section className="section-wrap section-block" id="work">
          <div className="section-heading"><div><span className="section-index">01 / SELECTED WORK</span><h2>Projects with a <span className="accent-text">purpose.</span></h2></div><p>A few things I've built and explored — from full-stack applications to machine learning and cloud use cases.</p></div>
          <div className="filter-row" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} className={activeFilter === category ? 'filter-pill active' : 'filter-pill'} onClick={() => setActiveFilter(category)}>{category}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project, index) => <motion.article className={'project-card accent-' + project.accent} key={project.name} layout variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} transition={{ duration: .35, delay: index * .06 }}>
            <div className="project-top"><span className="project-category">{project.category}</span><span className="project-number">0{data.projects.findIndex((item) => item.name === project.name) + 1}</span></div>
            <div className="project-art" aria-hidden="true"><div className="project-art-grid" /><span className="project-symbol">{project.symbol}</span><span className="project-art-orbit orbit-one" /><span className="project-art-orbit orbit-two" /><span className="project-art-caption">{project.name.toUpperCase()}</span></div>
            <div className="project-content"><span className="project-subtitle">{project.subtitle}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div><a className="project-link" href={project.repository} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16} /></a></div>
          </motion.article>)}</div>
          <div className="all-repos"><a href={data.links.github} target="_blank" rel="noreferrer">More on GitHub <ArrowRight size={16} /></a><span>New projects and experiments live on my profile.</span></div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><div><span className="section-index">02 / EXPERIENCE</span><h2>Where I've <span className="accent-text">grown.</span></h2></div><p>Working on dependable delivery, practical automation and software that supports real teams.</p></div>
          <div className="experience-layout"><div className="experience-rail"><span className="rail-line" />{data.experience.map((job, index) => <motion.article className="experience-item" key={job.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * .12 }}><span className="rail-dot">{index === 0 ? <BriefcaseBusiness size={15} /> : <Code2 size={15} />}</span><div className="experience-card"><div className="experience-meta"><span>{job.period}</span><span className="experience-location"><MapPin size={12} /> {job.location}</span></div><h3>{job.role}</h3><div className="experience-company">{job.company}</div><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></motion.article>)}</div>
            <aside className="experience-aside"><div className="aside-icon"><GitBranch size={21} /></div><span className="section-index">MY APPROACH</span><h3>Make it work.<br />Make it reliable.<br /><span className="accent-text">Make it better.</span></h3><p>I enjoy connecting application development with the systems, automation and teamwork needed to ship software reliably.</p><div className="aside-stat"><span className="aside-stat-number">CI/CD</span><span>Automation & delivery</span></div><div className="aside-stat"><span className="aside-stat-number">Linux</span><span>Infrastructure & operations</span></div></aside>
          </div>
        </section>

        <section className="skills-section" id="skills"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-index">03 / TOOLKIT</span><h2>Tools of the <span className="accent-text">trade.</span></h2></div><p>Technologies I work with across backend, frontend, data, cloud and engineering fundamentals.</p></div>
          <div className="skills-grid">{Object.entries(data.skills).map(([group, skills], index) => <motion.div className="skill-group" key={group} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * .06 }}><div className="skill-group-head"><span className="skill-icon">{index === 0 ? <Code2 size={18} /> : index === 1 ? <Layers3 size={18} /> : index === 2 ? <Cpu size={18} /> : index === 3 ? <Terminal size={18} /> : <BrainCircuit size={18} />}</span><h3>{group}</h3></div><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div>)}</div>
        </div></section>

        <section className="section-wrap section-block about-block" id="about"><div className="about-copy"><span className="section-index">04 / A LITTLE ABOUT ME</span><h2>Engineering is a practice of <span className="accent-text">curiosity.</span></h2><p>{data.intro}</p><p className="muted-copy">I value readable code, thoughtful problem-solving and continuous learning — whether I'm working on an API, an automation pipeline or a side project.</p><a className="text-link" href={data.links.leetcode} target="_blank" rel="noreferrer">Follow my DSA journey <ArrowUpRight size={16} /></a></div>
          <div className="achievement-panel"><div className="achievement-panel-head"><Award size={19} /><span>ACHIEVEMENTS & MILESTONES</span></div>{data.achievements.map((achievement, index) => <div className="achievement-row" key={achievement.title}><span className="achievement-index">0{index + 1}</span><div><strong>{achievement.title}</strong><small>{achievement.detail}</small></div><Check size={16} className="achievement-check" /></div>)}</div>
        </section>

        <section className="section-wrap section-block education-block" id="education"><div className="section-heading"><div><span className="section-index">05 / EDUCATION</span><h2>Strong <span className="accent-text">foundations.</span></h2></div></div><div className="education-grid">{data.education.map((item) => <article className="education-card" key={item.institution}><span className="education-icon"><GraduationCap size={19} /></span><div><span className="education-period">{item.period}</span><h3>{item.degree}</h3><p>{item.institution}</p><span className="education-result">{item.result}</span></div></article>)}</div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-orb orb-left" aria-hidden="true" /><div className="contact-orb orb-right" aria-hidden="true" /><span className="section-index">06 / WHAT'S NEXT?</span><h2>Have a good problem?<br /><span className="accent-text">Let's solve it.</span></h2><p>Interested in my work, have an opportunity to discuss, or just want to connect? My inbox is open.</p>
          <div className="contact-actions"><a className="button button-primary" href={data.links.email + '?subject=' + encodeURIComponent('Hello Yash — Portfolio contact')}><Mail size={17} /> Send me an email <ArrowUpRight size={15} /></a><a className="button button-secondary" href={data.links.linkedinMessage} target="_blank" rel="noreferrer"><Send size={16} /> Message on LinkedIn <ArrowUpRight size={15} /></a><button className="button button-quiet" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email address'}</button></div>
          <div className="contact-details"><span><MapPin size={14} /> {data.location}</span><a href={data.links.email}>{data.email}</a><a href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ExternalLink size={13} /></a></div>
        </div></section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand-block">
            <a href="#home" className="brand footer-brand" aria-label="Yash Kesharwani home">
              <span className="brand-mark">YK<span>.</span></span>
              <span className="brand-copy">Yash Kesharwani<small>Software Engineer I</small></span>
            </a>
            <p className="footer-intro">Building reliable software and practical automation, one improvement at a time.</p>
            <div className="footer-socials" aria-label="Social profiles">
              <a href={data.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={data.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={data.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={17} /></a>
              <a href={data.links.email} aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>Explore</h2>
            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#work">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
          <div className="footer-connect">
            <h2>Connect</h2>
            <a href={data.links.email}><Mail size={15} /> Email me</a>
            <a href={data.links.linkedinMessage} target="_blank" rel="noreferrer"><Send size={15} /> Message on LinkedIn</a>
            <a href={data.links.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub profile</a>
            <a href={data.links.leetcode} target="_blank" rel="noreferrer"><Code2 size={15} /> LeetCode profile</a>
            <a href={resumeUrl} download><Download size={15} /> Download resume</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="section-wrap footer-bottom-inner">
            <span>© {new Date().getFullYear()} Yash Kesharwani. All rights reserved.</span>
            <span>Designed and built by Yash Kesharwani · React &amp; TypeScript</span>
            <a href="#home" className="footer-back-top" aria-label="Back to top">↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
