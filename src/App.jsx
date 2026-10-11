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
            I enjoy turning ideas into practical software, learning how systems
            work, and creating experiences that are useful to real people.
            My interests include frontend engineering, backend development,
            and applied AI.
          </p>
        </section>

        <section className="content-section" id="skills">
          <p className="section-label">02 / SKILLS</p>
          <h2>Tools I work with.</h2>
          <div className="skill-list">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML & CSS</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>SQL</span>
            <span>Java</span>
          </div>
        </section>

        <section className="content-section" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects built to solve problems.</h2>

          <div className="project-list">
            <article className="project-card">
              <p className="project-number">PROJECT 01</p>
              <h3>AI Farmer Assistant</h3>
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
              <h3>AI Resume & Interview Coach</h3>
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

        <section className="content-section" id="contact">
          <p className="section-label">04 / CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p>
            I'm interested in software engineering opportunities, meaningful
            projects, and connecting with people who build technology.
          </p>
          <a className="primary-button" href="mailto:YOUR_EMAIL@example.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
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