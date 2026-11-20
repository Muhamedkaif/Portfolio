import { FormEvent, useState } from "react";

type IconName =
  | "arrow"
  | "briefcase"
  | "check"
  | "chevron"
  | "code"
  | "download"
  | "external"
  | "github"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "send"
  | "terminal"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15.2 1.9a13.3 13.3 0 0 0-7.2 0C5.2 0 4 .5 4 .5A5 5 0 0 0 3.8 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" />
  ),
  graduation: (
    <>
      <path d="m2 10 10-5 10 5-10 5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4zM22 2 11 13" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 17 6-6-6-6M12 19h8" />
    </>
  ),
  x: (
    <>
      <path d="M5 5l14 14M19 5 5 19" />
    </>
  ),
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const skillGroups = [
  {
    title: "Backend",
    code: "BE",
    skills: ["Java", "Spring Boot", "REST APIs", "Hibernate / JPA", "Node.js", "Express.js"],
  },
  { title: "Frontend", code: "FE", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Database", code: "DB", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", code: "TL", skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
];

const projects = [
  {
    number: "01",
    name: "SocialSnap",
    label: "Social platform",
    image: `${import.meta.env.BASE_URL}projects/SocialSnap.png`,
    github: "https://github.com/Muhamedkaif/SocialMedia",
    description:
      "A secure full-stack social experience built around frictionless sharing, discovery, and meaningful connection.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "Cloudinary"],
    features: [
      "Session-based authentication",
      "Profiles and social posts",
      "Cloud image uploads",
      "Fast user search",
    ],
  },
  {
    number: "02",
    name: "Career Platform",
    label: "AI career intelligence",
    image: `${import.meta.env.BASE_URL}projects/CareerPlatform.png`,
    github: "https://github.com/Muhamedkaif/career-platform",
    description:
      "A student-first career management platform that turns resume data into clear, actionable growth paths.",
    stack: ["Spring Boot", "React", "MySQL", "FastAPI", "Ollama", "JWT"],
    features: [
      "AI resume analysis",
      "Skill gap evaluation",
      "Career-ready profiles",
      "Job recommendations",
    ],
  },
  {
    number: "03",
    name: "Cattle Insurance",
    label: "Insurtech platform",
    image: `${import.meta.env.BASE_URL}projects/cattle-insurance.png`,
    github: "https://github.com/Muhamedkaif/cattle-insurance-project",
    description:
      "A role-based claim management system connecting farmers, veterinarians, and insurance administrators.",
    stack: ["React", "Spring Boot", "MySQL"],
    features: [
      "Farmer claim submission",
      "Veterinarian verification",
      "Insurance administration",
      "Role-based workflows",
    ],
  },
  {
    number: "04",
    name: "ProjectFlow",
    label: "Project operations",
    image: `${import.meta.env.BASE_URL}projects/project-management.png`,
    github: "https://github.com/Muhamedkaif/ProjectManagement-project",
    description:
      "A polished SaaS workspace for planning projects, managing tasks, and keeping delivery on track.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    features: [
      "Project command center",
      "Task workflow management",
      "Status and delivery tracking",
      "Analytics and team settings",
    ],
  },
];

function downloadResume() {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}resume/Muhamed-Kaif-K-Resume.pdf`;
  link.download = "Muhamed-Kaif-K-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="logo" href="#home" aria-label="Kaif home">
          KAIF<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="button button-sm desktop-resume" onClick={downloadResume}>
          <Icon name="download" size={16} /> Download Resume
        </button>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <button className="button" onClick={downloadResume}>
            <Icon name="download" size={16} /> Download Resume
          </button>
        </nav>
      )}
    </header>
  );
}

function SocialLinks({ labels = false }: { labels?: boolean }) {
  return (
    <div className={`social-links ${labels ? "with-labels" : ""}`}>
      <a href="https://github.com/Muhamedkaif" target="_blank" rel="noreferrer" aria-label="GitHub">
        <Icon name="github" />
        {labels && <span>GitHub</span>}
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Icon name="linkedin" />
        {labels && <span>LinkedIn</span>}
      </a>
      <a href="mailto:muhamedkaifk@gmail.com" aria-label="Email">
        <Icon name="mail" />
        {labels && <span>Email</span>}
      </a>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Code editor showing Java and React code">
      <span className="tech-float tech-java">Java</span>
      <span className="tech-float tech-spring">Spring Boot</span>
      <span className="tech-float tech-react">React</span>
      <span className="tech-float tech-mysql">MySQL</span>
      <div className="editor-glow" />
      <div className="code-window">
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>PortfolioController.java</span>
          <span className="branch">main</span>
        </div>
        <div className="editor">
          <div className="line-nums">
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
            <br />
            09
            <br />
            10
            <br />
            11
          </div>
          <pre>
            <span className="pink">@RestController</span>
            {"\n"}
            <span className="purple">public class</span>{" "}
            <span className="yellow">PortfolioController</span> {"{"}
            {"\n\n"} <span className="muted">@GetMapping</span>(
            <span className="green">"/build"</span>){"\n"} <span className="purple">public</span>{" "}
            Experience <span className="blue">create</span>() {"{"}
            {"\n"} <span className="purple">return new</span> Experience({"\n"}{" "}
            <span className="green">"robust backend"</span>,{"\n"}{" "}
            <span className="green">"intuitive frontend"</span>
            {"\n"} );{"\n"} {"}"}
            {"\n"}
            {"}"}
          </pre>
        </div>
        <div className="editor-status">
          <span>Spring Boot 3.4</span>
          <span>UTF-8 &nbsp; Java 21</span>
        </div>
      </div>
      <div className="mini-terminal">
        <div>
          <span>$</span> npm run build
        </div>
        <p>
          <Icon name="check" size={13} /> Built in 1.24s
        </p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}



function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="product-window project-screenshot-window">
      <div className="mock-top">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>{project.name.toLowerCase().replace(/\s+/g, "")}.app</span>
        <em>↗</em>
      </div>
      <div className="project-screenshot-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="project-screenshot-img"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-gray-500 font-mono">
            Screenshot coming soon
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`project-showcase ${index % 2 ? "reverse" : ""}`}>
      <div className="project-visual">
        <ProjectVisual project={project} />
      </div>
      <div className="project-copy">
        <div className="project-number">
          {project.number}
          <span>/ 04</span>
        </div>
        <div className="project-label">{project.label}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button
          className={`detail-toggle ${expanded ? "open" : ""}`}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          Project highlights <Icon name="chevron" size={16} />
        </button>
        {expanded && (
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={14} />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="project-actions">
          <a
            className="button button-sm"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={16} /> GitHub
          </a>
          <a className="text-link" href="#contact">
            View live demo <Icon name="external" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = (formData.get("subject") as string) || `Portfolio inquiry from ${name}`;
    const message = formData.get("message") as string;

    const body = `Hi Kaif,\n\n${message}\n\n---\nFrom: ${name} (${email})`;
    const mailtoUrl = `mailto:muhamedkaifk@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input required name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input required type="email" name="email" placeholder="you@email.com" />
        </label>
      </div>
      <label>
        Subject
        <input required name="subject" placeholder="What would you like to discuss?" />
      </label>
      <label>
        Message
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me a little about your idea..."
        />
      </label>
      <button className="button" type="submit">
        <Icon name={sent ? "check" : "send"} size={17} />
        {sent ? "Opening your email app..." : "Send Message"}
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="availability">
              <i /> Available for internships
            </div>
            <div className="eyebrow">
              <span />
              Hello, I&apos;m
            </div>
            <h1>
              Muhamed
              <br />
              <span>Kaif K</span>
            </h1>
            <h2>Java Full-Stack Developer</h2>
            <p>
              I build scalable web applications by combining robust backend systems with intuitive
              frontend experiences. Passionate about solving real-world problems through technology.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore My Work <Icon name="arrow" />
              </a>
              <button className="button button-secondary" onClick={downloadResume}>
                <Icon name="download" size={17} /> Download Resume
              </button>
            </div>
            <SocialLinks labels />
          </div>
          <HeroVisual />
        </section>

        <section className="about section-shell" id="about">
          <SectionHeading eyebrow="About me" title="A Little About Me" />
          <div className="about-grid">
            <div className="profile-card">
              <div className="profile-frame">
                <div className="profile-grid" />
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                  alt="Muhamed Kaif"
                  className="relative z-1 w-full h-full object-cover"
                />
                <span className="profile-code">&lt;/&gt;</span>
                <div className="profile-status">
                  <i />
                  Open to work
                </div>
              </div>
              <div className="profile-caption">
                <div>
                  <small>PROFILE</small>
                  <b>Muhamed Kaif K</b>
                </div>
                <span>Chennai, IN</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a Computer Science Engineering student passionate about full-stack
                development and building practical software solutions. I enjoy understanding how
                systems work, designing backend architectures, integrating APIs, and developing
                user-friendly interfaces.
              </p>
              <p>
                I continuously explore new technologies and strengthen my problem-solving skills
                through coding challenges and real-world projects.
              </p>
              <div className="about-note">
                <Icon name="code" />
                <span>
                  <b>Currently exploring</b>Scalable Spring architectures & modern React patterns
                </span>
              </div>
            </div>
            <div className="highlight-grid">
              <div>
                <Icon name="graduation" />
                <small>Degree</small>
                <b>B.E. Computer Science Engineering</b>
              </div>
              <div>
                <Icon name="layers" />
                <small>Institution</small>
                <b>Rajalakshmi Institute of Technology</b>
              </div>
              <div>
                <span className="metric">2028</span>
                <small>Expected graduation</small>
                <b>Building toward the future</b>
              </div>
              <div>
                <span className="metric">8.5</span>
                <small>Current CGPA</small>
                <b>Consistent academic focus</b>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <SectionHeading
            eyebrow="My toolkit"
            title="Technologies I Work With"
            text="A focused stack for building dependable products from database to interface."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-title">
                  <span>{group.code}</span>
                  <h3>{group.title}</h3>
                  <small>0{skillGroups.indexOf(group) + 1}</small>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      <i>{skill.slice(0, 2).toUpperCase()}</i>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <SectionHeading
            eyebrow="Selected projects"
            title="Things I've Built."
            text="Real-world problems, thoughtful systems, and interfaces designed to make complex work feel simple."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectShowcase key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Learning in the Open."
            text="Contributing, collaborating, and becoming a better engineer through real codebases."
          />
          <div className="experience-grid">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Icon name="briefcase" size={18} />
                </div>
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span>Open-source contributor</span>
                    <em>Present</em>
                  </div>
                  <h3>Green Button Alliance</h3>
                  <h4>OpenESPI Java</h4>
                  <p>
                    Contributed to an established Java ecosystem by improving third-party Thymeleaf
                    pages and updating documentation links for a clearer developer experience.
                  </p>
                  <div className="tags">
                    <span>Java</span>
                    <span>Thymeleaf</span>
                    <span>Open source</span>
                    <span>Documentation</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item future">
                <div className="timeline-marker">
                  <span />
                </div>
                <div>
                  <h4>What&apos;s next</h4>
                  <p>
                    Interested in collaborative Java projects and improving software development
                    practices with thoughtful teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="code-philosophy">
              <div className="window-bar">
                <span>developer-mindset.md</span>
                <em>●</em>
              </div>
              <div className="philosophy-body">
                <Icon name="terminal" size={24} />
                <p>
                  <span>&gt;</span> Good software is built through curiosity, clear communication,
                  and the discipline to keep improving.
                </p>
                <div>
                  <i /> learn <i /> build <i /> contribute <i /> repeat
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="problem-solving section-shell">
          <div className="solve-head">
            <SectionHeading eyebrow="Problem solving" title="Practice. Think. Improve." />
            <p>
              I sharpen my fundamentals through consistent coding practice and algorithmic
              problem-solving.
            </p>
          </div>
          <div className="solve-grid">
            <a href="https://leetcode.com/" target="_blank" rel="noreferrer">
              <span className="solve-icon">LC</span>
              <div>
                <small>CODING PRACTICE</small>
                <b>LeetCode Profile</b>
                <em>
                  View profile <Icon name="external" size={13} />
                </em>
              </div>
            </a>
            <a href="https://github.com/Muhamedkaif" target="_blank" rel="noreferrer">
              <span className="solve-icon">
                <Icon name="github" size={24} />
              </span>
              <div>
                <small>BUILDING IN PUBLIC</small>
                <b>GitHub Profile</b>
                <em>
                  Explore code <Icon name="external" size={13} />
                </em>
              </div>
            </a>
            <div>
              <span className="solve-icon">J</span>
              <div>
                <small>CORE LANGUAGE</small>
                <b>Java</b>
                <em>Object-oriented thinking</em>
              </div>
            </div>
            <div>
              <span className="solve-icon">
                <Icon name="code" size={24} />
              </span>
              <div>
                <small>FOUNDATIONS</small>
                <b>Data Structures & Algorithms</b>
                <em>Patterns and problem solving</em>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-copy">
            <SectionHeading eyebrow="Get in touch" title="Let's Build Something Together." />
            <p>
              I&apos;m open to Java Full-Stack Developer internship opportunities, collaborative
              projects, and meaningful technical discussions.
            </p>
            <a className="email-link" href="mailto:muhamedkaifk@gmail.com">
              <span>
                <Icon name="mail" />
              </span>
              <div>
                <small>EMAIL ME AT</small>
                <b>muhamedkaifk@gmail.com</b>
              </div>
              <Icon name="arrow" />
            </a>
            <SocialLinks labels />
          </div>
          <ContactForm />
        </section>
      </main>
      <footer>
        <div className="footer-inner">
          <a className="logo" href="#home">
            KAIF<span>.</span>
          </a>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <span>© 2026 Muhamed Kaif K</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
