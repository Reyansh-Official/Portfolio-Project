import { useEffect, useState } from 'react'
import profilePortrait from './assets/portrait-poster.jpg'
import './App.css'

const techStack = [
  {
    group: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    group: 'Frameworks',
    items: ['React', 'Next.js', 'FastAPI'],
  },
  {
    group: 'Tools & Technologies',
    items: ['PostgreSQL', 'Supabase', 'AWS', 'Pandas', 'Git', 'GitHub'],
  },
]

const courses = [
  'Object-Oriented Programming',
  'Data Structures',
  'Algorithms',
  'Machine Learning',
  'Linear Algebra',
  'Probability & Statistics',
]

const educationStats = [
  { label: 'GPA', value: '3.9 / 4.0', highlight: true, meter: 3.9 / 4 },
  { label: 'Honors', value: "President's & Dean's List" },
  { label: 'Graduating', value: 'December 2027' },
  { label: 'Leadership', value: 'Finance Chair, Indian Student Association', wide: true },
]

const projects = [
  {
    title: 'B.A.R.S.',
    subtitle: 'Bill Accessibility & Relief System',
    badge: 'Best in Health · hackUMBC 2026',
    sticker: { rank: '2nd', label: 'Overall hackUMBC' },
    summary:
      'Turns a photo of a hospital bill into a complete, policy-screened financial assistance application in English or Spanish.',
    bullets: [
      'Won 2nd Overall and Best in Health Track at hackUMBC 2026 as a team of 4 with a full-stack platform that turns a photo of a hospital bill into a complete financial assistance application in English or Spanish.',
      "Engineered a deterministic rules engine that screens eligibility against each hospital's published policy (income bands, presumptive programs, Medicaid limits), citing the source policy page for every result and backed by 45 unit tests.",
      "Automated hospital onboarding with an AI pipeline that discovers a hospital's assistance policy via web search, extracts it into structured JSON, and validates it against Maryland legal minimums and federal poverty guidelines, onboarding UMMS, Johns Hopkins, and MedStar at about $0.40 per hospital.",
      "Architected the backend on Supabase PostgreSQL with row-level security isolating each hospital's data, AES-256 encryption of patient contact details, hashed private access links, and phone verification via one-time codes.",
      'Developed a policy-grounded chat with page citations, AI pre-checks of uploaded documents, SMS deadline reminders with a deduplicated scheduling engine, and a counselor dashboard with identity checks and impact metrics.',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Claude API', 'Row-Level Security', 'AES-256', 'SMS / OTP'],
  },
  {
    title: 'Campusly',
    subtitle: 'Verified Social Network for UMBC',
    badge: '100+ users on day one · Bitcamp 2026',
    summary:
      'A students-only campus network with live feeds, DMs, media sharing, and a Study Buddy matcher built on real-time Supabase.',
    bullets: [
      'Gained 100+ users within the first day of launch at Bitcamp 2026 as a team of 4.',
      'Verified UMBC students with .edu email OTP authentication and segmented users into the UMBC community by email domain.',
      'Designed a React/Tailwind CSS frontend with a Supabase backend handling PostgreSQL data storage, file storage, and real-time WebSocket updates.',
      'Implemented live feeds, likes, comments, and DMs without page refresh.',
      'Built a Supabase Storage media pipeline for photos, videos, and avatars across posts, profiles, and campus feeds.',
      'Developed a Study Buddy matcher using a weighted similarity matrix to recommend students by shared interests and percentage match score.',
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'PostgreSQL', 'Realtime', 'WebSockets'],
  },
]

const contactLinks = [
  { label: 'Email', handle: 'reyatt30@gmail.com', href: 'mailto:reyatt30@gmail.com' },
  { label: 'LinkedIn', handle: 'in/reyansh-attavar', href: 'https://www.linkedin.com/in/reyansh-attavar/' },
  { label: 'GitHub', handle: '@Reyansh-Official', href: 'https://github.com/Reyansh-Official' },
]

const portfolioSections = [
  { number: '01', label: 'Intro', href: '#home' },
  { number: '02', label: 'Education', href: '#education' },
  { number: '03', label: 'Tools', href: '#skills' },
  { number: '04', label: 'Work', href: '#projects' },
  { number: '05', label: 'Contact', href: '#contact' },
]

const marqueeItems = [
  'Full-Stack Engineering',
  'Backend Systems',
  'Databases',
  '2nd Overall · hackUMBC 2026',
  '100+ Users Day One · Bitcamp 2026',
  "President's List",
]

const contactCode = `if success() == True:
    celebrate()
while success() == False:
    try_again()
    be_awesome()`

function TechLogo({ name }) {
  if (name === 'React') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="4" />
        <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" />
        <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" transform="rotate(120 24 24)" />
      </svg>
    )
  }

  if (name === 'GitHub') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6c-10 0-18 8-18 18 0 8 5 15 12 17 1 0 1-.4 1-1v-4c-5 1-6-2-6-2-1-2-2-3-2-3-2-1 0-1 0-1 2 0 3 2 3 2 2 3 5 2 6 1 .2-1 1-2 2-2-4-.5-8-2-8-9 0-2 1-4 2-5 0-.5-1-3 .3-5 0 0 2-.5 6 2 2-.5 4-.5 6 0 4-2.5 6-2 6-2 1 2 .3 4 .2 5 1 1 2 3 2 5 0 7-4 8.5-8 9 .7.6 1 2 1 3v6c0 .6.4 1 1 1 7-2 12-9 12-17 0-10-8-18-18-18Z" />
      </svg>
    )
  }

  if (name === 'Git') {
    return (
      <svg className="git-logo" viewBox="0 0 48 48" aria-hidden="true">
        <rect className="git-logo-bg" x="10" y="10" width="28" height="28" rx="4" transform="rotate(45 24 24)" />
        <circle className="git-logo-branch" cx="19" cy="19" r="3" />
        <circle className="git-logo-branch" cx="29" cy="29" r="3" />
        <circle className="git-logo-branch" cx="29" cy="19" r="3" />
        <path className="git-logo-branch" d="M21 19h8M21 21l8 8" fill="none" />
      </svg>
    )
  }

  if (name === 'Supabase') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M27 4 10 26h15l-4 18 17-23H23l4-17Z" />
      </svg>
    )
  }

  if (name === 'PostgreSQL') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M13 15c3-6 16-7 22-1 6 7 3 19-7 22-7 2-15-1-18-8-2-5 0-10 3-13Z" fill="none" />
        <path d="M28 15c5 3 5 11 1 16M20 20c2 1 5 1 8 0M20 28c3 2 7 2 10-1" fill="none" />
        <circle cx="18" cy="19" r="1.7" />
        <circle cx="30" cy="19" r="1.7" />
      </svg>
    )
  }

  if (name === 'Python') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M23 5h8c4 0 7 3 7 7v7c0 4-3 7-7 7H19c-4 0-7 3-7 7v2" fill="none" />
        <path d="M25 43h-8c-4 0-7-3-7-7v-7c0-4 3-7 7-7h12c4 0 7-3 7-7v-2" fill="none" />
        <circle cx="30" cy="12" r="2" />
        <circle cx="18" cy="36" r="2" />
      </svg>
    )
  }

  const initials = {
    'C++': 'C++',
    JavaScript: 'JS',
    SQL: 'SQL',
    FastAPI: 'API',
    Pandas: 'PD',
    AWS: 'AWS',
    'Next.js': 'N',
  }

  return <span className="logo-initials">{initials[name] ?? name.slice(0, 2)}</span>
}

function ContactIcon({ name }) {
  if (name === 'Email') {
    return (
      <svg viewBox="0 0 48 48">
        <rect x="7" y="12" width="34" height="24" fill="none" />
        <path d="m8 13 16 13 16-13" fill="none" />
      </svg>
    )
  }

  if (name === 'LinkedIn') {
    return <span className="contact-icon-text">in</span>
  }

  return <TechLogo name={name} />
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [typedContactCode, setTypedContactCode] = useState('')

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.18 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const contactSection = document.querySelector('#contact')
    let typingTimer
    let hasStarted = false

    const startTyping = () => {
      if (hasStarted) return
      hasStarted = true

      let currentIndex = 0
      setTypedContactCode('')

      typingTimer = window.setInterval(() => {
        currentIndex += 1
        setTypedContactCode(contactCode.slice(0, currentIndex))

        if (currentIndex >= contactCode.length) {
          window.clearInterval(typingTimer)
        }
      }, 34)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping()
        }
      },
      { threshold: 0.45 },
    )

    if (contactSection) {
      observer.observe(contactSection)
    }

    return () => {
      observer.disconnect()
      window.clearInterval(typingTimer)
    }
  }, [])

  return (
    <main className="site-shell">
      {isLoading && (
        <div className="loader-screen" role="status" aria-label="Loading portfolio">
          <div className="loader-mark">RA</div>
          <p>Loading Portfolio</p>
          <span></span>
        </div>
      )}

      <nav className="section-navigation" aria-label="Portfolio sections">
        <a className="navigation-signature" href="#home" aria-label="Back to introduction">
          RA
        </a>
        <div className="navigation-links">
          {portfolioSections.map((section) => (
            <a href={section.href} key={section.href}>
              <span>{section.number}</span>
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="intro-section" id="home">
        <div className="intro-panel">
          <p className="intro-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Software Engineer · CS @ UMBC
          </p>
          <h1>
            Reyansh
            <span>Attavar</span>
          </h1>
          <div className="intro-summary">
            <div>
              <p>
                Software engineer focused on building reliable web experiences,
                scalable backend systems, and well-structured databases.
              </p>
            </div>
            <div className="intro-actions">
              <a className="primary-action" href="#projects">
                View Projects
              </a>
              <a className="secondary-action" href="#contact">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="portrait-stage">
          <figure className="profile-portrait">
            <div className="portrait-crop">
              <img src={profilePortrait} alt="Portrait of Reyansh Attavar" />
            </div>
            <figcaption>Ellicott City, MD</figcaption>
          </figure>
        </div>
        <div className="intro-marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <span key={copy}>
                {marqueeItems.map((item) => (
                  <span key={item}>
                    {item}
                    <b>✦</b>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section scroll-reveal" id="education">
        <div className="section-layout education-grid">
          <h2><span className="section-number">02</span>Academic Foundation</h2>
          <div className="education-layout">
            <article className="section-body school-card">
              <div className="school-card-bar">
                <span>Student Record</span>
                <span>Class of 2027</span>
              </div>
              <div className="education-card-heading">
                <h3>University of Maryland, Baltimore County</h3>
                <p className="degree-line">B.S. in Computer Science</p>
              </div>
              <div className="education-meta">
                <span>Aug 2024 – Dec 2027</span>
                <span>Catonsville, MD</span>
              </div>
              <div className="course-block">
                <h4>Relevant Courses</h4>
                <ul className="course-list">
                  {courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </article>
            <dl className="stat-grid">
              {educationStats.map((stat) => (
                <div className={`stat-tile${stat.highlight ? ' stat-highlight' : ''}${stat.wide ? ' stat-wide' : ''}`} key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                  {stat.meter && (
                    <span className="stat-meter" aria-hidden="true">
                      <span style={{ width: `${stat.meter * 100}%` }} />
                    </span>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="portfolio-section scroll-reveal" id="skills">
        <div className="section-layout skills-grid">
          <h2><span className="section-number">03</span>Tools I Use To Build</h2>
          <div className="stack-board">
            {techStack.map((stack) => (
              <article className="stack-group" key={stack.group}>
                <h3>{stack.group}</h3>
                <ul className="skill-list">
                  {stack.items.map((item) => (
                    <li key={item}>
                      <span className="skill-icon" aria-hidden="true">
                        <TechLogo name={item} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section scroll-reveal" id="projects">
        <div className="section-layout projects-grid">
          <h2><span className="section-number">04</span>Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                {project.sticker && (
                  <div className="project-sticker">
                    <strong>{project.sticker.rank}</strong>
                    <span>{project.sticker.label}</span>
                  </div>
                )}
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-heading">
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                </div>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-tech" aria-label={`${project.title} tech stack`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.bullets && (
                  <details className="project-more">
                    <summary>Details</summary>
                    <ul className="project-bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section scroll-reveal" id="contact">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-eyebrow">
              <span className="section-number">05</span>
              Let&apos;s Connect
            </p>
            <h2>
              Building Work
              <span>That Matters</span>
            </h2>
            <p className="contact-lede">
              I care about building software that solves real problems, connects
              people, and turns ideas into systems that last.
            </p>
          </div>
          <figure className="code-quote">
            <div className="terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <b>motto.py</b>
            </div>
            <pre>
              <code className="typing-code" aria-label="if success equals true, celebrate. while success equals false, try again and be awesome.">
                {typedContactCode}
                <span className="typing-cursor" aria-hidden="true" />
              </code>
            </pre>
          </figure>
        </div>
        <ul className="contact-cards">
          {contactLinks.map((link) => {
            const isEmail = link.href.startsWith('mailto:')

            return (
              <li key={link.label}>
                <a
                  className="contact-card"
                  href={link.href}
                  {...(isEmail ? {} : { target: '_blank', rel: 'noreferrer' })}
                >
                  <span className="contact-card-icon" aria-hidden="true">
                    <ContactIcon name={link.label} />
                  </span>
                  <span className="contact-card-text">
                    <span className="contact-card-label">{link.label}</span>
                    <span className="contact-card-handle">{link.handle}</span>
                  </span>
                  <span className="contact-card-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Reyansh Attavar</span>
        <span>Built with React &amp; Vite</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
