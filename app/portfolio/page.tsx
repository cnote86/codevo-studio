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
    <div className="min-h-screen text-gray-900 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
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
              role="Full-stack development & SEO"
              description="Developed a professional services website emphasizing clarity and credibility. Implemented full-stack functionality and SEO optimization. Translated business requirements into clean, accessible layouts with responsive behavior across devices."
            />

            <ProjectCard
              title="CAM Amezcuas"
              url="https://camamezcuas.com"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Full-stack development & SEO"
              description="Built a brand-focused website combining marketing visuals with structured content. Implemented full-stack functionality and SEO optimization. Balanced aesthetics with usability and performance for optimal user experience."
            />

            <ProjectCard
              title="Servicios Fiscales"
              url="https://servicios-fiscales.com/"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end development"
              description="Professional tax and financial consulting website for Americans living in Mexico. Features include tax consulting, compliance guidance, and specialized advisory services for cross-border residents."
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
              url="https://www.mi-tandita.com/"
              badge="Live Production"
              badgeColor="from-green-500 to-emerald-500"
              role="Front-end & product development"
              description="A mobile app for organizing collective savings groups (tandas). Platform for coordination, calendars, payment tracking, and notifications. Currently in development with only the landing website deployed and live in production."
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
              className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/mario-ricardo-campos-hernandez-913642169" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:from-blue-800 hover:to-blue-950 transition-all shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}