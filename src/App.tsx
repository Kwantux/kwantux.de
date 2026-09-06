import { Github, Mail, Linkedin, ChevronDown, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Imprint } from './components/Imprint';
import { MatrixEffect } from './components/MatrixEffect';
import { KrftgAME } from './components/KrftgAME';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Networks",
    description: "A Minecraft plugin for performance friendly redstone-free automated sorting",
    image: "https://networks.kwantux.de/assets/logo.png",
    link: "https://modrinth.com/plugin/networks",
    tags: ["Java"]
  },
  {
    title: "Procedural World Generation Demo",
    description: "A demo of a procedural world generation algorithm",
    image: "/worldgen.png",
    link: "https://worldgen.kwantux.de",
    tags: ["React", "Three.js"]
  }
];

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const names = ["Kwantux", "Linus"];
    let timeout: NodeJS.Timeout;

    const typeText = (nameIndex: number, charIndex: number, isDeleting: boolean) => {

      const currentName = names[nameIndex];
      
      if (isDeleting) {
        // Deleting text
        setName(currentName.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          timeout = setTimeout(() => {
            typeText(nameIndex == 0 ? 1 : 0, 0, false);
          }, 1000);
        } else {
          timeout = setTimeout(typeText, 100, nameIndex, charIndex, isDeleting);
        }
      } else {
        // Typing text
        setName(currentName.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentName.length) {
          timeout = setTimeout(() => {
            typeText(nameIndex, charIndex, true);
          }, 2000);
        } else {
          timeout = setTimeout(typeText, 150, nameIndex, charIndex, false);
        }
      }
    };

    timeout = setTimeout(typeText, 1000, 0, 0, false); // Start after 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className={`transform transition-all duration-1000 translate-y-0 opacity-100`}>
          <h1 className="text-6xl font-bold mb-4">
            {name}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Hobby Developer</p>
          <div className="flex gap-4 mb-12 justify-center">
            <a href="https://github.com/Kwantux" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://ko-fi.com/kwantux" className="hover:text-primary transition-colors">
              <Coffee className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/linus-peczkowski-6bab00350/" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kwantux@kwantux.de" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <button 
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-10 animate-bounce hover:scale-110 transition-transform cursor-pointer"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-background/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 -z-10"></div>
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group bg-secondary/50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="py-8 text-center text-muted-foreground bg-background/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent -z-10"></div>
        <Link to="/imprint" className="hover:text-primary transition-colors">
          Imprint
        </Link>
      </footer>
    </>
  );
}

function PathRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get('p');
    
    if (path) {
      window.history.replaceState(null, '', path);
      navigate(path);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <Router>
        <div className="min-h-screen text-foreground">
          <MatrixEffect />
          <PathRedirect />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/imprint.html" element={<Imprint />} />
            <Route path="/krftg251" element={<KrftgAME />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;