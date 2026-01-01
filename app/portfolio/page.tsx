import Link from "next/link";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import TrainingProjectCard from "@/components/ui/TrainingProjectCard";
import ContentBox from "@/components/ui/ContentBox";
import BulletListItem from "@/components/ui/BulletListItem";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <PageHeader
  backHref="/"
  pill="Front-End Portfolio"
  title="Front-End Portfolio"
  subtitle="Patient-Facing & Content-Driven Web Platforms"
/>


        {/* Live Production Websites */}
        <section className="mb-20">
          <SectionHeader
  title="Live Production Websites"
  gradient="from-green-500 to-emerald-500"
/>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These are real, publicly accessible sites built for real users.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Rosie's Janitorial Services"
              url="https://rosiesjanitorialoc.com"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end development, layout, responsiveness, deployment support"
              description="Built a responsive, content-driven website focused on service clarity and trust. Structured layouts for scalability and ongoing content updates. Implemented SEO fundamentals and performance optimizations. Supported deployment and post-launch fixes in a live environment."
            />

            <ProjectCard
              title="ASME Consultoría"
              url="https://asmeconsulttoria.com"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end development"
              description="Developed a professional services website emphasizing clarity and credibility. Translated business requirements into clean, accessible layouts. Ensured responsive behavior across devices."
            />

            <ProjectCard
              title="CAM Amezcuas"
              url="https://camamezcuas.com"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end development & content implementation"
              description="Built a brand-focused website combining marketing visuals with structured content. Balanced aesthetics with usability and performance."
            />

            <ProjectCard
              title="Servicios Financieros"
              url="https://servicios-financieros.com"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end development"
              description="Delivered a content-heavy site requiring clear information hierarchy. Focused on readability, accessibility, and responsive layout."
            />
          </div>
        </section>

        {/* In-Progress Projects */}
        <section className="mb-20">
          <SectionHeader
  title="In-Progress Projects"
  gradient="from-yellow-500 to-amber-500"
/>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These reflect active development and production thinking, not unfinished ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="DR All Season Travel"
              badge="Website"
              badgeColor="from-yellow-500 to-amber-500"
              role="Front-end development"
              description="Designing a scalable front-end structure. Implementing responsive layouts and reusable components. Preparing for deployment and iterative updates."
            />

            <ProjectCard
              title="Mi Tandita"
              badge="Mobile application"
              badgeColor="from-yellow-500 to-amber-500"
              role="Front-end & product development"
              description={
                <>
                  <p>
                    Structuring user flows and app navigation. 
                    Translating business logic into user-friendly interfaces. 
                    Preparing an application for future store deployment.
                  </p>
                  <p className="text-gray-600 italic mt-3">
                    This project is currently in development and not yet deployed, 
                    but it reflects how I structure applications with production in mind.
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* Training Projects */}
        <section className="mb-20">
          <SectionHeader
  title="Selected Training Projects (TripleTen)"
  gradient="from-blue-500 to-indigo-500"
/>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These projects reinforce best practices and complement my professional work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <TrainingProjectCard
              title="Around the U.S."
              url="https://cnote86.github.io/web_project_around/"
              focusItems={[
                "Responsive layout",
                "JavaScript DOM manipulation",
                "Structured front-end architecture"
              ]}
            />

            <TrainingProjectCard
              title="Homeland"
              url="https://cnote86.github.io/web_project_homeland/"
              focusItems={[
                "Component-based thinking",
                "Clean HTML/CSS structure",
                "Front-end logic implementation"
              ]}
            />

            <TrainingProjectCard
              title="Coffee Shop"
              url="https://cnote86.github.io/web_project_coffeeshop/"
              focusItems={[
                "Semantic HTML",
                "CSS layout fundamentals",
                "Content-driven design"
              ]}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <TrainingProjectCard
              title="Library Management System"
              url="https://cnote86.github.io/web_project_library_es/"
              focusItems={[
                "Advanced JavaScript",
                "Data management",
                "Complex UI interactions"
              ]}
            />
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <SectionHeader
  title="How I Work"
  gradient="from-purple-500 to-pink-500"
/>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <ContentBox color="blue-50">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Development Principles</h3>
              <ul className="text-gray-700 space-y-3 inline-block">
                <BulletListItem color="blue">Mobile-first responsive design</BulletListItem>
                <BulletListItem color="blue">Clarity and trust for content-heavy pages</BulletListItem>
                <BulletListItem color="blue">Comfortable with live cloud-hosted environments</BulletListItem>
                <BulletListItem color="blue">Maintainability over just visuals</BulletListItem>
              </ul>
            </ContentBox>
            
            <ContentBox color="teal-50">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Collaboration</h3>
              <ul className="text-gray-700 space-y-3 inline-block">
                <BulletListItem color="teal">Works well with designers and copywriters</BulletListItem>
                <BulletListItem color="teal">Values stakeholder collaboration</BulletListItem>
                <BulletListItem color="teal">Focuses on real-world deployment</BulletListItem>
                <BulletListItem color="teal">Aligns with patient-facing digital work</BulletListItem>
              </ul>
            </ContentBox>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center py-12">
<SectionHeader title="Get In Touch" gradient="from-blue-500 to-teal-500" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a 
              href="mailto:info@codevostudio.com" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
            >
              Email Me
            </a>
            <a 
              href="mailto:mc1986.99@gmail.com" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg"
            >
              Alternative Email
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://github.com/cnote86" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-lg"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/mario-ricardo-campos-hernandez-913642169" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:from-blue-800 hover:to-blue-950 transition-all shadow-lg"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}