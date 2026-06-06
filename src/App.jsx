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
    items: ['React', 'FastAPI'],
  },
  {
    group: 'Tools & Technologies',
    items: ['PostgreSQL', 'Supabase', 'Pandas', 'Git', 'GitHub'],
  },
]

const projects = [
  {
    title: 'Campusly',
    featured: true,
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
  {
    title: 'Portfolio Website',
    description:
      'Developed a responsive React portfolio website to showcase technical skills, education, and software engineering projects, featuring a modern editorial design, intuitive navigation, and mobile-first responsiveness.',
    tech: ['React', 'CSS', 'Vite'],
  },
]

const contactLinks = [
  { label: 'Email', href: 'mailto:reyatt30@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reyansh-attavar/' },
  { label: 'GitHub', href: 'https://github.com/Reyansh-Official' },
]

const portfolioSections = [
  { number: '01', label: 'Intro', href: '#home' },
  { number: '02', label: 'Education', href: '#education' },
  { number: '03', label: 'Tools', href: '#skills' },
  { number: '04', label: 'Work', href: '#projects' },
  { number: '05', label: 'Contact', href: '#contact' },
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
  }

  return <span className="logo-initials">{initials[name] ?? name.slice(0, 2)}</span>
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
              <span>Ellicott City, MD</span>
            </div>
          </div>
        </div>
        <figure className="profile-portrait">
          <img src={profilePortrait} alt="Portrait of Reyansh Attavar" />
        </figure>
      </section>

      <section className="portfolio-section scroll-reveal" id="education">
        <div className="section-layout education-grid">
          <h2>Academic Foundation</h2>
          <div className="section-body">
            <div className="education-card-heading">
              <div>
                <h3>University of Maryland, Baltimore County</h3>
                <p className="degree-line">B.S. in Computer Science</p>
              </div>
              <div className="education-meta">
                <span>August 2024 - December 2027</span>
                <span>Catonsville, MD</span>
              </div>
            </div>
            <dl className="education-list">
              <div>
                <dt>Relevant Courses</dt>
                <dd>
                  Computing in Python, Object-Oriented Programming, Data
                  Structures, Linear Algebra, Probability and Statistics
                </dd>
              </div>
              <div>
                <dt>Honors</dt>
                <dd>President&apos;s List and Dean&apos;s List</dd>
              </div>
              <div>
                <dt>Activities / Societies</dt>
                <dd>Indian Student Association, Finance Chair</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>3.9 / 4.0</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="portfolio-section scroll-reveal" id="skills">
        <div className="section-layout skills-grid">
          <h2>Tools I Use To Build</h2>
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
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className={project.featured ? 'project-card featured-project' : 'project-card'} key={project.title}>
                <h3>{project.title}</h3>
                <div className="project-details">
                  {project.bullets ? (
                    <ul className="project-bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                  <ul className="project-tech" aria-label={`${project.title} tech stack`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section scroll-reveal" id="contact">
        <h2>
          Building Work
          <span>That Matters</span>
        </h2>
        <p>
          I care about building software that solves real problems, connects
          people, and turns ideas into systems that last.
        </p>
        <figure className="code-quote">
          <pre>
            <code className="typing-code" aria-label="if success equals true, celebrate. while success equals false, try again and be awesome.">
              {typedContactCode}
              <span className="typing-cursor" aria-hidden="true" />
            </code>
          </pre>
        </figure>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
