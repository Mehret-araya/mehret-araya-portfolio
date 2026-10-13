
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home">
          MA<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">
            SOFTWARE ENGINEERING STUDENT · DEVELOPER
          </p>

          <h1>
            I build software
            <br />
            to solve <span>real problems.</span>
          </h1>

          <p className="hero-description">
            I'm Mehret Araya, a software engineering student interested in
            full-stack development, AI, and building useful digital products.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#about">
              More about me <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="availability">
            <span aria-hidden="true" className="status-dot" />
            Open to software engineering opportunities
          </p>
        </section>

        <section className="content-section" id="about">
          <p className="section-label">01 / ABOUT</p>
          <h2>Engineering with purpose.</h2>
          <p>
            I'm a third-year Software Engineering student at Addis Ababa
            University who enjoys building practical software to solve
            real-world problems. My interests include frontend engineering,
            backend systems, and applied AI. Through projects such as AI
            Farmer Assistant and AI Resume &amp; Interview Coach, I'm
            developing my skills by turning ideas into useful digital products.
          </p>
        </section>

        <section className="content-section" id="skills">
          <p className="section-label">02 / SKILLS</p>
          <h2>Tools I work with.</h2>

          <div className="skill-list">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>Kotlin</span>
            <span>React</span>
            <span>HTML &amp; CSS</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>SQL</span>
            <span>Java</span>
            <span>PostgreSQL</span>
          </div>
        </section>

        <section className="content-section" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects built to solve problems.</h2>

          <div className="project-list">
            <article className="project-card">
              <p className="project-number">PROJECT 01</p>
              <h3>
                <a
                  href="https://github.com/Mehret-araya/AI-farmer-assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Farmer Assistant ↗
                </a>
              </h3>
              <p>
                An agriculture-focused application designed to help farmers
                access crop information and AI-assisted guidance.
              </p>
              <p className="project-tech">
                React · Node.js · MongoDB · AI
              </p>
            </article>

            <article className="project-card">
              <p className="project-number">PROJECT 02</p>
              <h3>
                <a
                  href="https://github.com/Mehret-araya/ai-resume-interview-coach"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Resume &amp; Interview Coach ↗
                </a>
              </h3>
              <p>
                An application in development for resume analysis, resume
                improvement, and interview preparation.
              </p>
              <p className="project-tech">
                React · Node.js · MongoDB · AI
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="experience">
          <p className="section-label">04 / EXPERIENCE</p>
          <h2>Learning by building and contributing.</h2>

          <div className="project-list">
            <article className="project-card">
              <p className="project-number">EDUCATION</p>
              <h3>Software Engineering Student</h3>
              <p>Addis Ababa University</p>
              <p>
                Currently in my third year, developing my software
                engineering skills through coursework and practical projects.
              </p>
            </article>

            <article className="project-card">
              <p className="project-number">INTERNSHIP</p>
              <h3>Web Development Intern</h3>
              <p>SyntecxHub</p>
              <p>
                Gained practical web development experience by working
                on development projects during my internship.
              </p>
            </article>

            <article className="project-card">
              <p className="project-number">VOLUNTEERING</p>
              <h3>Volunteer Teacher</h3>
              <p>
                Contributed six months of volunteer teaching to support
                children's learning.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="contact">
          <p className="section-label">05 / CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p>
            I'm interested in software engineering opportunities, meaningful
            projects, and connecting with people who build technology.
          </p>

          <div className="contact-links">
            <a
              className="primary-button"
              href="mailto:mehretaraya499@gmail.com"
            >
              Email me ↗
            </a>

            <a
              href="https://github.com/Mehret-araya"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mehret-araya"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.instagram.com/mehret.ar/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://x.com/mehret_ara68441"
              target="_blank"
              rel="noreferrer"
            >
              X (Twitter) ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Mehret Araya</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
