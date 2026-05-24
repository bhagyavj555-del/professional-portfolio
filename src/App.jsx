import { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Marks Calculator",
      desc: "A simple marks calculator built using JavaScript.",
      link: "https://github.com/your-username/marks-calculator",
    },
    {
      title: "Portfolio Website",
      desc: "Professional portfolio with login system & UI design.",
      link: "https://github.com/your-username/portfolio",
    },
  ];

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* NAVBAR */}
      <nav className="nav">
        <h2>Bhagyalakshmi V J</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <img src={profilePic} alt="profile" className="profile-img" />

        <h1>Hi, I'm Bhagyalakshmi V J</h1>
        <p>I am a passionate computer science engineering student and an aspiring Full Stack Developer. I enjoy learning new technologies and solving real world problems through code. </p>

        <div className="socials">
          <a href="https://github.com/bhagyavj555-del" target="_blank">🐱 GitHub</a>
          <a href="https://linkedin.com/in/bhagyalakshmi-v-j-846095389" target="_blank">💼 LinkedIn</a>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="card">
        <h2>Interactive Resume</h2>
        <p><b>Education:</b> BTech Computer Science</p>
        <p><b>College:</b> St.Joseph's College of Engineering and Technology, Palai</p>
        <p><b>Skills:</b> HTML, CSS, JavaScript, React</p>
        <p><b>Goal:</b> Full Stack Developer</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank">View Project</a>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="card">
        <h2>Contact Me</h2>

        <form action="https://formsubmit.co/your-email@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Bhagyalakshmi | Built with React
      </footer>

    </div>
  );
}