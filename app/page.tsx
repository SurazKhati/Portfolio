import { Navbar } from "../components/navbar";
import { HeroSection } from "@/components/herosection";
import { TechnicalSkills } from "@/components/technicalskills";
import { SelfFeatured } from "@/components/selfFeatured";
import { Selfcontacts } from "@/components/selfcontacts";
import { Footer } from "@/components/footer";
import { Scroll } from "@/components/scroll";
import type { Project } from "@/components/selfFeatured";

export default function Home() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Hand Gesture Writing Board",
      description:
        "A real-time virtual writing board using computer vision to track hand movements and convert gestures into drawings and text.",
      image: "/board.jpg",
      tags: ["Computer Vision", "OpenCV", "Python"],
    },
    {
      id: 2,
      title: "Gesture-Controlled 3D Object Manipulation",
      description:
        "Gesture-based real-time rotation, scaling, and movement of 3D objects using hand tracking.",
      image: "/3d.png",
      tags: ["Computer Vision", "Hand Tracking", "3D"],
    },
    {
    id: 3,
    title: "Lalitpur Shortest Path Visualizer (Dijkstra)",
    description:
      "An interactive visualization of Dijkstra’s algorithm applied to Lalitpur’s road network, allowing users to select source and destination points and observe shortest-path computation step by step.",
    image: "/maps.jpg",
    tags: [
      "Data Structures & Algorithms",
      "Dijkstra’s Algorithm",
      "Graph Theory",
      "Pathfinding",
      "Visualization",
    ],
  },
  {
    id: 4,
    title: "Advanced UI & Frontend Clones",
    description:
      "High-fidelity clones of modern web interfaces with a strong focus on responsiveness, smooth animations, reusable components, and clean frontend architecture.",
    image: "/ui.png",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
    ],
  },
  {
    id: 5,
    title: "Full-Stack E-Commerce Clone",
    description:
      "A full-stack e-commerce application featuring product listings, cart management, user authentication, and order flow, designed to replicate real-world online shopping experiences.",
    image: "/ecommerce.png",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Authentication",
      "REST APIs",
    ],
  },
  {
    id: 6,
    title: "Multi-User Advanced CRUD System",
    description:
      "A role-based multi-user CRUD application with authentication and authorization, enabling secure creation, updating, and management of data for different user roles.",
    image: "/crud.png",
    tags: [
      "CRUD Operations",
      "Role-Based Access Control",
      "JWT Authentication",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
  },
  ];

  return (
    <div className="w-full">
      <Navbar
        title="Suraj Khati"
        options={["Home", "Skills", "Projects", "Contacts"]}
      />

      <section id="Home">
        <HeroSection
          title={
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-bold text-5xl md:text-7xl">
              Hello, I&apos;m Suraj Khati
            </span>
          }
          subtext="Junior Software Engineer | MERN | AI/ML"
          description="Building scalable full-stack and AI-powered applications."
          image="/pp.png"
          batchtxt=""
          stats={[
            { value: "50+", label: "Projects" },
            { value: "5+", label: "Years Exp." },
            { value: "100%", label: "ClientSatisfaction" },
          ]}
        />
        <Scroll />
      </section>

      {/* Skills Section - Add id="Skills" */}
    
      <section id="Skills">
  <TechnicalSkills
    heading="Technical Skills"
    description="Strong foundation in full-stack web development with hands-on experience building scalable applications, interactive user interfaces, and real-world applications."
    categories={[
      {
        icon: "code",
        title: "Programming Languages",
        skills: [
          "JavaScript",
          "TypeScript",
          "Python",
          "SQL",
          "PHP",
        ],
      },
      {
        icon: "javascript",
        title: "Frontend Technologies",
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
        skills: [
          "Node.js",
          "Express.js",
        ],
      },
      {
        icon: "database",
        title: "Databases",
        skills: [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
        ],
      },
      {
        icon: "ai",
        title: "Computer Vision & AI",
        skills: [
          "OpenCV",
          "Hand Tracking",
          "Real-Time Processing",
        ],
      },
      {
        icon: "tools",
        title: "Tools & Core Concepts",
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

      <section id="Projects">
        <SelfFeatured projects={projects} />
      </section>

      <section id="Contacts" className="py-12 bg-gray-900">
        <Selfcontacts
          heading={
            <span className="text-4xl font-bold text-red-500">
              Let&apos;s Work Together
            </span>
          }
          description="Let’s build something impactful together."
          contactInfo={{
            email: "surazkhati135@gmail.com",
            phone: "+977-9864638141",
            location: "Kathmandu, Nepal (Remote)",
          }}
        />
      </section>

      <Footer />
    </div>
  );
}
