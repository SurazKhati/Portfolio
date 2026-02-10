import {Navbar} from "../components/navbar"
import { HeroSection } from "@/components/herosection";
import { Footer } from "@/components/footer";
import { TechnicalSkills } from "@/components/technicalskills";
import { Selfcontacts } from "@/components/selfcontacts";
import { SelfFeatured , Project } from "@/components/selfFeatured";
import {Scroll} from "@/components/scroll"

export default function Home() {
  const projects: Project[] = [
  {
    id: 1,
    title: "Hand Gesture Writing Board",
    description:
      "A real-time virtual writing board that uses computer vision to track hand movements and convert gestures into drawings and text, enabling touch-free interaction.",
    image: "/board.jpg",
    tags: [
      "Computer Vision",
      "OpenCV",
      "Python",
      "Hand Tracking",
      "Real-Time Processing",
    ],
  },
  {
    id: 2,
    title: "Gesture-Controlled 3D Object Manipulation",
    description:
      "A computer vision–based system that maps hand gestures to real-time transformations of a 3D object, enabling gesture-based rotation, scaling, and movement without physical controllers.",
    image: "/3d.png",
    tags: [
      "Computer Vision",
      "Hand Tracking",
      "3D Transformation",
      "Real-Time Interaction",
      "Python",
    ],
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
    <div >
      <Navbar title="Sura Khati" options={["Home","Skills","Projects","Contacts"]}/>
      
      {/* Home Section - Add id="Home" */}
      <section id="Home" className="w-full overflow-x-hidden">
        <HeroSection 
          stats={[
            { value: "50+", label: "Projects" },
            { value: "5+", label: "YearsExp." },
            { value: "100%", label: "ClientSatisfaction" },
          ]}  
          batchtxt=""  
          title="Hello, I'm Suraj Khati" 
          subtext="Junior Software Engineer | MERN Stack Developer | AI/ML Enthusiast" 
          description="Specializing in full-stack MERN development and AI/ML-driven solutions that create scalable, impactful digital products."
          image="./pp.png"  
        />

       <Scroll />
      </section>

      {/* Skills Section - Add id="Skills" */}
    
      <section id="Skills">
  <TechnicalSkills
    heading="TECHNICAL SKILLS"
    description="Strong foundation in full-stack web development with experience building scalable, user-focused applications."
    categories={[
      {
        icon: "code",
        title: "Programming Languages",
        skills: [
          "JavaScript",
          "TypeScript",
          "Python",
          "SQL",
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
        title: "AI",
        skills: [
          "Jupyter Notebook",
          "Pandas",
          "Numpy",
          "Data Analysis",
          "Data Visualization",
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


      {/* Projects Section - Add id="Projects" */}
     
      <section id="Projects">
        <SelfFeatured projects={projects} />
      </section>

      {/* Contacts Section - Add id="Contacts" */}
     
      <section id="Contacts">
        <Selfcontacts
          heading="Let's Work Together"
          description="Ready to build scalable, intelligent applications? Let’s collaborate — combining full-stack development and AI/ML to achieve your project goals."
          contactInfo={{
            email: "surazkhati135@gmail.com",
            phone: "+977-9864638141",
            location: "Available for Remote Work | Kathmandu, Nepal"
          }}
        />
      </section>

      <Footer/>
    </div>    
  );
}