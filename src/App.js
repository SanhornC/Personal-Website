import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

import profilePhoto from './assets/sanhorn.jpeg';
import tsmcLogo from './assets/tsmc.png';
import cityuLogo from './assets/cityu.png';
import honhaiLogo from './assets/honhai.png';

/* ---------------- Data ---------------- */

const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'patents', label: 'Patents' },
];

// eslint-disable-next-line no-unused-vars
const INTERESTS = [
  'Multimodal LLM Reasoning',
  'Data-Centric & Agentic AI',
  'Information Retrieval & RAG',
  'Time Series & Foundation Models',
];

const RESEARCH_THEMES = [
  {
    title: 'Reasoning with Multimodal LLMs & Foundation Models',
    body: 'How multimodal LLMs and foundation models can reason more reliably across diverse tasks and modalities — from textual question answering to temporal and time series understanding, and beyond.',
  },
  {
    title: 'Data-Centric & Agentic AI',
    body: 'Data-centric AI through agentic, multi-agent systems — using agents to drive data attribution, data selection, and synthetic data generation — with the long-term goal of building agentic systems that self-evolve and autonomously improve their own data and capabilities.',
  },
  {
    title: 'Information Retrieval & RAG',
    body: 'How retrieval-augmented generation and information retrieval that ground model reasoning in external knowledge can enable more accurate and verifiable answers.',
  },
];

const NEWS = [
  {
    date: 'Jun 2026',
    desc: (
      <>
        🎉 One Paper accepted at <strong>ACL 2026</strong>
      </>
    ),
  },
  {
    date: 'March 2026',
    desc: (
      <>
        🎓 Started M.S. in Computer Science at UIUC, advised by Prof. Jingrui He
      </>
    ),
  },
  {
    date: 'May 2025',
    desc: (
      <>
        💼 Joined <strong>TSMC</strong> CPO AI4BI Division as a Data Engineer Intern
      </>
    ),
  },
];

const PUBLICATIONS = [
  {
    title: 'TSAQA: Time Series Analysis Question and Answering Benchmark',
    link: 'https://arxiv.org/abs/2601.23204',
    authors: (
      <>
        <strong>Sanhorn Chen</strong>*, Baoyu Jing*, Lecheng Zheng, Boyu Liu, Zihao Li,
        Jiaru Zou, Tianxin Wei, Zhining Liu, Zhichen Zeng, Ruizhong Qiu, Xiao Lin,
        Yuchen Yan, Qi Yu, Dongqi Fu, Jingchao Ni, Jingrui He, Hanghang Tong
      </>
    ),
    badge: { text: 'NL-GEMI Workshop @ ACL 2026' },
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2601.23204' }],
  },
  {
    title: 'A Survey on Time Series Question Answering',
    link: null,
    authors: (
      <>
        <strong>Sanhorn Chen</strong>, Baoyu Jing, Lecheng Zheng, Zeya Wang,
        Jingchao Ni, Hanghang Tong
      </>
    ),
    badge: { text: 'In Submission' },
    links: [],
  },
  {
    title:
      'Towards Verifiable Agentic Data Science: Solving Irregular TSQA via Tool-Grounded Reasoning',
    link: 'https://arxiv.org/abs/2606.15107',
    authors: (
      <>
        <strong>Sanhorn Chen</strong>, Xiaoyang Chen, Baoyu Liu, Roy Zhao
      </>
    ),
    badge: { text: 'arXiv Preprint, 2026' },
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2606.15107' }],
  },
  {
    title:
      'Accelerating Multi-modal LLM Gaming Performance via Input Prediction and Mishit Correction',
    link: 'https://arxiv.org/abs/2512.17250',
    authors: (
      <>
        Ziyang Lin, Zixuan Sun, <strong>Sanhorn Chen</strong>, Xiaoyang Chen, Roy Zhao
      </>
    ),
    badge: { text: 'arXiv Preprint, 2025' },
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2512.17250' }],
  },
];

const EXPERIENCE = [
  {
    logo: tsmcLogo,
    company: 'Taiwan Semiconductor Manufacturing Company (TSMC)',
    role: 'Data Engineer Intern · CPO AI4BI Division',
    meta: 'Hsinchu City, Taiwan · May 2025 – August 2025',
  },
  {
    logo: cityuLogo,
    company: 'City University of Hong Kong',
    role: 'Summer Research Intern · Department of Computer Science',
    meta: 'Kowloon, Hong Kong S.A.R. · June 2024 – August 2024',
    advisor: 'Prof. Li Min Ming',
  },
  {
    logo: honhaiLogo,
    company: 'Foxconn (Hon Hai) Research Institute',
    role: 'AI Research Intern · Computer Vision Group',
    meta: 'Taipei City, Taiwan · June 2023 – February 2024',
  },
];

const PROJECTS = [
  {
    name: 'AgentsClaw',
    desc: 'A multi-agent IEP meeting preparation system designed for Speech-Language Pathologists (SLPs). The platform enables pre-session planning, new-staff training, and realistic meeting practice through persona-based AI agent interactions.',
    link: { label: 'Website →', url: 'https://www.agentsclaw.ai' },
  },
  {
    name: 'ATLAS Data Analysis',
    desc: "Data cleaning scripts and documentation for the UIUC ATLAS Data Team's analysis of computer-room usage across campus.",
    link: { label: 'GitHub →', url: 'https://github.com/SanhornC/ATLAS---Data-Team-Computer-Rooms-' },
  },
  {
    name: 'Test Genie',
    desc: 'A web + LLM application that helps students prepare for exams by generating practice tests and lecture summaries from their uploaded materials.',
    link: { label: 'GitHub →', url: 'https://github.com/sliao082/Test-Genie' },
  },
  {
    name: 'ERA Law Firm Website',
    desc: 'A website designed and built for a law firm based in Hsinchu, Taiwan.',
    link: { label: 'Website →', url: 'https://eralaw.web.app' },
  },
];

const PATENTS = [
  {
    authors: 'Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, ',
    title: '"Method and Apparatus Related to Data Generation Framework."',
    ref: 'US Patent Application 19/069,248',
    year: '2025',
  },
  {
    authors: 'Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, ',
    title: '"Method and Apparatus Related to Data Generation Framework."',
    ref: 'US Patent Application 19/069,242',
    year: '2025',
  },
];

/* ---------------- Icons ---------------- */

const EXT = { target: '_blank', rel: 'noopener noreferrer' };

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3 6l9 7 9-7" />
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4v12.02H3V8.98zM9.5 8.98h3.84v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V8.98z" />
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
);
const IconScholar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    <path d="M5 13.18v3.59c0 .7.38 1.34 1 1.68l5 2.73c.6.33 1.39.33 2 0l5-2.73c.62-.34 1-.98 1-1.68v-3.59l-6 3.27c-.6.33-1.39.33-2 0L5 13.18z" />
  </svg>
);

/* ---------------- Navbar ---------------- */

function NavBar({ theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="navbar-brand" onClick={(e) => go(e, 'about')}>
            Sanhorn Chen
          </span>

          <ul className="navbar-links">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeSection === s.id ? 'active' : ''}
                  onClick={(e) => go(e, s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title={theme === 'white' ? 'Switch to Champagne mode' : 'Switch to White mode'}
            >
              {theme === 'white' ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M12 3c.5 4 2.8 6.3 6.8 6.8C14.8 10.3 12.5 12.6 12 16.6c-.5-4-2.8-6.3-6.8-6.8C9.2 9.3 11.5 7 12 3z" />
                  <path d="M6 14c.3 2 1.4 3.1 3.4 3.4C7.4 17.7 6.3 18.8 6 20.8c-.3-2-1.4-3.1-3.4-3.4 2-.3 3.1-1.4 3.4-3.4z" />
                </svg>
              )}
            </button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={(e) => go(e, s.id)}>
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}

/* ---------------- Sections ---------------- */

function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <div className="about-left">
          <img className="profile-photo" src={profilePhoto} alt="Sanhorn Chen" />
          <div className="social-row">
            <a href="mailto:sanhorn2@illinois.edu" aria-label="Email" title="Email">
              <IconEmail />
            </a>
            <a href="https://linkedin.com/in/sanhorn-chen-898941260" aria-label="LinkedIn" title="LinkedIn" {...EXT}>
              <IconLinkedIn />
            </a>
            {/* TODO: Add Google Scholar link */}
            <a href="https://scholar.google.com/citations?user=aVKZZlcAAAAJ&hl=en" aria-label="Google Scholar" title="Google Scholar (Sanhorn Chen)" {...EXT}>
              <IconScholar />
            </a>
            <a href="https://github.com/SanhornC" aria-label="GitHub" title="GitHub" {...EXT}>
              <IconGitHub />
            </a>
          </div>
        </div>

        <div className="about-right">
          <h1 className="about-name">Sanhorn Chen <span style={{ fontWeight: 600 }}>(陳聖閎)</span></h1>
          <p className="about-intro">
            Hi! I am Sanhorn Chen (陳聖閎). I am a first-year M.S. student in Computer Science at the{' '}
            <a className="inline-link" href="https://illinois.edu/" {...EXT}>University of Illinois Urbana-Champaign (UIUC)</a>,
            advised by <a className="inline-link" href="https://www.hejingrui.org/" {...EXT}>Prof. Jingrui He</a>.
            Prior to this, I received my B.S. in Computer Science + Economics from{' '}
            <a className="inline-link" href="https://illinois.edu/" {...EXT}>University of Illinois Urbana-Champaign (UIUC)</a>,
            where I worked closely with <a className="inline-link" href="http://tonghanghang.org/" {...EXT}>Prof. Hanghang Tong</a>.
          </p>

          <div className="interests-label">Research Interests</div>
          {/* Quick-summary interest pills — commented out for now.
          <div className="interest-tags">
            {INTERESTS.map((it) => (
              <span className="interest-pill" key={it}>{it}</span>
            ))}
          </div>
          */}

          <p className="about-intro research-lead">
            My long-term goal is to build <strong>reliable, self-evolving AI systems</strong> that
            reason robustly and continually improve from data. I'm interested in the following topics:
          </p>
          <ul className="research-themes">
            {RESEARCH_THEMES.map((t) => (
              <li key={t.title}>
                <strong>{t.title}:</strong> {t.body}
              </li>
            ))}
          </ul>
          <p className="about-intro research-closing">
            I'm always happy to discuss research or explore collaborations — feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="section">
      <h2 className="section-title">News</h2>
      <div className="news-list">
        {NEWS.map((n, i) => (
          <div className="news-item" key={i}>
            <span className="news-date">{n.date}</span>
            <span className="news-desc">{n.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="section">
      <h2 className="section-title">Publications</h2>
      <p className="pub-note">* denotes equal contribution</p>
      {PUBLICATIONS.map((p, i) => (
        <div className="pub-entry" key={i}>
          <div className="pub-title">
            {p.link ? (
              <a href={p.link} {...EXT}>{p.title}</a>
            ) : (
              <span>{p.title}</span>
            )}
          </div>
          <div className="pub-authors">{p.authors}</div>
          <div className="pub-meta">
            <span className="badge badge-venue">{p.badge.text}</span>
            {p.links.map((l) => (
              <a className="pub-link" key={l.label} href={l.url} {...EXT}>{l.label}</a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      {EXPERIENCE.map((e, i) => (
        <div className="exp-entry" key={i}>
          <div className="exp-logo">
            <img src={e.logo} alt={e.company} />
          </div>
          <div className="exp-body">
            <div className="exp-company">{e.company}</div>
            <div className="exp-role">{e.role}</div>
            <div className="exp-meta">{e.meta}</div>
            {e.advisor && <div className="exp-advisor">Advised by {e.advisor}</div>}
          </div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      {PROJECTS.map((p) => (
        <div className="proj-entry" key={p.name}>
          <div className="proj-head">
            <span className="proj-name">{p.name}</span>
            <a className="btn-accent" href={p.link.url} {...EXT}>{p.link.label}</a>
          </div>
          <div className="proj-desc">{p.desc}</div>
        </div>
      ))}
    </section>
  );
}

function Patents() {
  return (
    <section id="patents" className="section">
      <h2 className="section-title">Patents</h2>
      {PATENTS.map((p, i) => (
        <p className="patent-item" key={i}>
          {p.authors}
          <strong>Sanhorn Chen</strong>. {p.title} <em>{p.ref}</em>, {p.year}.
        </p>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2026 Sanhorn Chen &nbsp;·&nbsp;{' '}
        <a href="mailto:sanhorn2@illinois.edu">sanhorn2@illinois.edu</a>
      </p>
      <div className="footer-social">
        <a href="mailto:sanhorn2@illinois.edu" aria-label="Email"><IconEmail /></a>
        <a href="https://linkedin.com/in/sanhorn-chen-898941260" aria-label="LinkedIn" {...EXT}><IconLinkedIn /></a>
        <a href="https://github.com/SanhornC" aria-label="GitHub" {...EXT}><IconGitHub /></a>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */

function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'champagne'
  );
  const [activeSection, setActiveSection] = useState('about');
  const observerRef = useRef(null);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'white' ? 'champagne' : 'white';
      if (nextTheme === 'white') {
        document.documentElement.setAttribute('data-theme', 'white');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {}
      return nextTheme;
    });
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <NavBar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <About />
        <News />
        <Publications />
        <Experience />
        <Projects />
        <Patents />
      </main>
      <Footer />
    </div>
  );
}

export default App;
