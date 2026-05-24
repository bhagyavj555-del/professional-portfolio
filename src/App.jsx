import { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Marks Calculator",
      desc: "A simple marks calculator built using JavaScript. Using this we can calculate marks easily and the appropriate grades will be given according to the marks a person gets.",
      link: "https://bhagyavj555-del.github.io/simple-calculator",
    },
    {
      title: "Portfolio Website",
      desc: "Professional portfolio with login system & glassmorphism UI. This is my first portfolio website which has a login system and can access my complete portfolio.",
      link: "https://bhagyavj555-del.github.io/Portfolio-",
    },
  ];

  return (
    <div className={darkMode ? "dark" : "light"}>
      
      {/* ================= NAVBAR ================= */}
      <nav className="nav">
        <h2>Bhagyalakshmi</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <img src={profilePic} alt="Profile" className="profile-img" />

        <h1>Hi, I'm Bhagyalakshmi V j</h1>
        <p>I am a passionate computer sience engineering student and an aspiring full stack developer. I enjoy learning new technologies and solving real world problems.</p>

        <div className="socials">
          <a
            href="https://github.com/bhagyavj555-del"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/bhagyalakshmi-v-j-846095389"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section id="resume" className="card">
        <h2>Interactive Resume</h2>
        <p><strong>Education:</strong>Computer science and Engineering</p>
        <p><strong>College:</strong>St,Joseph's College of Engineering and Technology, Palai</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Goal:</strong> Full Stack Developer</p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="card">
        <h2>Contact Me</h2>

        <form
          action="https://formsubmit.co/bhagyavj555@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 Bhagyalakshmi | Portfolio Website
      </footer>
    </div>
  );
}