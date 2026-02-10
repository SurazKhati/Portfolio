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
          ]}
        />
        <Scroll />
      </section>

      <section id="Skills" className="py-12 bg-gray-900">
        <TechnicalSkills
          heading=""
          description="Strong foundation in full-stack development and data-driven solutions."
          categories={[]}
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
