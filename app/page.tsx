import { Navbar } from "../components/navbar";
import { HeroSection } from "@/components/herosection";
import { Footer } from "@/components/footer";
import { TechnicalSkills } from "@/components/technicalskills";
import { Selfcontacts } from "@/components/selfcontacts";
import { SelfFeatured, Project } from "@/components/selfFeatured";
import { Scroll } from "@/components/scroll";

export default function Home() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Hand Gesture Writing Board",
      description:
        "A real-time virtual writing board that uses computer vision to track hand movements and convert gestures into drawings and text, enabling touch-free interaction.",
      image: "/board.jpg",
      tags: ["Computer Vision", "OpenCV", "Python", "Hand Tracking", "Real-Time Processing"],
    },
    {
      id: 2,
      title: "Gesture-Controlled 3D Object Manipulation",
      description:
        "A computer vision–based system that maps hand gestures to real-time transformations of a 3D object, enabling gesture-based rotation, scaling, and movement without physical controllers.",
      image: "/3d.png",
      tags: ["Computer Vision", "Hand Tracking", "3D Transformation", "Real-Time Interaction", "Python"],
    },
    {
      id: 3,
      title: "Lalitpur Shortest Path Visualizer (Dijkstra)",
      description:
        "An interactive visualization of Dijkstra's algorithm applied to Lalitpur's road network, allowing users to select source and destination points and observe shortest-path computation step by step.",
      image: "/maps.jpg",
      tags: ["Data Structures & Algorithms", "Dijkstra's Algorithm", "Graph Theory", "Pathfinding", "Visualization"],
    },
    {
      id: 4,
      title: "Advanced UI & Frontend Clones",
      description:
        "High-fidelity clones of modern web interfaces with a strong focus on responsiveness, smooth animations, reusable components, and clean frontend architecture.",
      image: "/ui.png",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Frontend Development"],
    },
    {
      id: 5,
      title: "Full-Stack E-Commerce Clone",
      description:
        "A full-stack e-commerce application featuring product listings, cart management, user authentication, and order flow, designed to replicate real-world online shopping experiences.",
      image: "/ecommerce.png",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Authentication", "REST APIs"],
    },
    {
      id: 6,
      title: "Multi-User Advanced CRUD System",
      description:
        "A role-based multi-user CRUD application with authentication and authorization, enabling secure creation, updating, and management of data for different user roles.",
      image: "/crud.png",
      tags: ["CRUD Operations", "Role-Based Access Control", "JWT Authentication", "React.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar title="Suraj Khati" options={["Home", "Skills", "Projects", "Contacts"]} />

      {/* Home Section */}
      <section id="Home" className="w-full overflow-x-hidden">
        <HeroSection
          stats={[
            { value: "50+", label: "Projects" },
            { value: "5+", label: "YearsExp." },
            { value: "100%", label: "ClientSatisfaction" },
          ]}
          batchtxt=""
          title={
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-bold text-5xl md:text-7xl lg:text-8xl">
              Hello, I'm Suraj Khati
            </span>
          }
          subtext="Junior Software Engineer | MERN Stack Developer | AI/ML Enthusiast"
          description="Specializing in full-stack MERN development and AI/ML-driven solutions that create scalable, impactful digital products."
          image="./pp.png"
        />
        <Scroll />
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-12 bg-gray-900">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-center mb-8 animate-pulse">
          TECHNICAL SKILLS
        </h2>

        <TechnicalSkills
  heading=""
  description="Strong foundation in full-stack web development with experience building scalable, user-focused applications."
  categories={[
    {
      icon: "code",
      title: "Programming Languages",
      color: "text-blue-400",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      icon: "javascript",
      title: "Frontend Technologies",
      color: "text-blue-400",
      skills: [
        "React.js",
        "Next.js",
        "Vanilla JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      icon: "backend",
      title: "Backend Technologies",
      color: "text-blue-400",
      skills: ["Node.js", "Express.js"],
    },
    {
      icon: "database",
      title: "Databases",
      color: "text-blue-400",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      icon: "ai",
      title: "AI",
      color: "text-blue-400",
      skills: [
        "Jupyter Notebook",
        "Pandas",
        "NumPy",
        "Data Analysis",
        "Data Visualization",
      ],
    },
    {
      icon: "tools",
      title: "Tools & Core Concepts",
      color: "text-blue-400",
      skills: [
        "REST APIs",
        "JWT Authentication",
        "Role-Based Access Control",
        "CRUD Operations",
        "Git & GitHub",
        "Data Structures & Algorithms",
      ],
    },
  ]}
/>

      </section>

      {/* Projects Section */}
      <section id="Projects">
        <SelfFeatured projects={projects} />
      </section>

      {/* Contacts Section */}
      <section id="Contacts" className="py-12 bg-gray-900">
        <Selfcontacts
          heading={
            <span
              className="block text-4xl font-extrabold text-center mb-6 text-red-500 animate-pulse"
              style={{
                textShadow: "0 0 10px #ff0000, 0 0 20px #ff4d4d, 0 0 30px #ff6666",
              }}
            >
              Let's Work Together
            </span>
          }
          description="Ready to build scalable, intelligent applications? Let's collaborate — combining full-stack development and AI/ML to achieve your project goals."
          contactInfo={{
            email: "surazkhati135@gmail.com",
            phone: "+977-9864638141",
            location: "Available for Remote Work | Kathmandu, Nepal",
          }}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
