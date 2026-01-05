import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import ContentBox from "@/components/ui/ContentBox";
import BulletListItem from "@/components/ui/BulletListItem";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-gray-900 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
  <div className="flex flex-col items-center gap-8">
    <Link
      href="/"
      className="text-blue-600 hover:underline text-sm"
    >
      ← Back to Home
    </Link>

    <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
      <div className="bg-white rounded-full px-6 py-2">
        <span className="text-sm font-semibold text-gray-700">
          About Me
        </span>
      </div>
    </div>

    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
      About Me
    </h1>

    <p className="text-xl text-gray-600 max-w-2xl">
      Front-end developer building responsive, production-ready websites
    </p>
  </div>
</header>

        {/* Main Content */}
        <div className="space-y-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* What I Do */}
          <section>
            <SectionHeader title="What I Do" gradient="from-blue-500 to-teal-500" />
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-center">
              <p>
                I specialize in building content-driven websites that prioritize clarity and usability. 
                My work focuses on creating functional, reliable web experiences that serve real business needs.
              </p>
              <p>
                Most of my projects involve organizing information architecture, implementing responsive design, 
                and deploying sites that perform well in production environments. I work on live production sites, 
                client projects, and continuously develop my skills through structured training and hands-on experience.
              </p>
              <p>
                Key projects include Rosie's Janitorial Services, ASME Consultoría, and CAM Amezcuas – 
                websites designed to deliver clear outcomes for users and business owners.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <SectionHeader title="Tech Stack" gradient="from-purple-500 to-indigo-500" />
            <div className="grid md:grid-cols-2 gap-8">
              <ContentBox color="blue-50">
                <h3 className="font-bold text-center text-lg text-gray-800 mb-4">Core Technologies</h3>
                <p className="text-sm text-center text-gray-600 mb-4">
  Technologies I use daily in production work
</p>

                <ul className="space-y-3 inline-block">
                  <BulletListItem color="blue">HTML5 & CSS3</BulletListItem>
                  <BulletListItem color="blue">JavaScript (ES6+)</BulletListItem>
                  <BulletListItem color="blue">React & Next.js</BulletListItem>
                  <BulletListItem color="blue">Tailwind CSS</BulletListItem>
                  <BulletListItem color="blue">Responsive Design</BulletListItem>
                </ul>
              </ContentBox>
              <ContentBox color="purple-50">
                <h3 className="font-bold text-lg text-center text-gray-800 mb-4">Deployment & Tools</h3>
                <p className="text-sm text-center text-gray-600 mb-4">
  Technologies I use daily in production work
</p>

                <ul className="space-y-3 inline-block">
                  <BulletListItem color="purple">DigitalOcean</BulletListItem>
                  <BulletListItem color="purple">Google Cloud Platform</BulletListItem>
                  <BulletListItem color="purple">Git & GitHub</BulletListItem>
                  <BulletListItem color="purple">Vercel</BulletListItem>
                  <BulletListItem color="purple">Modern Build Tools</BulletListItem>
                </ul>
              </ContentBox>
            </div>
          </section>

          {/* Approach */}
          <section>
            <SectionHeader title="My Approach" gradient="from-teal-500 to-green-500" />
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-center">
              <ContentBox color="teal-50">
                <p className="text-center">
                  <strong className="font-semibold text-teal-700">Mobile-first philosophy:</strong> I design for mobile devices first, then scale up. 
                  This ensures optimal performance and user experience across all screen sizes.
                </p>
              </ContentBox>
              <ContentBox color="blue-50">
                <p className="text-center">
                  <strong className="font-semibold text-blue-700">Content hierarchy focus:</strong> For information-heavy sites, clear organization 
                  matters more than trendy design elements. Users should find what they need quickly and intuitively.
                </p>
              </ContentBox>
              <ContentBox color="purple-50">
                <p className="text-center">
                  <strong className="font-semibold text-purple-700">Production mindset:</strong> I've deployed enough sites to understand what breaks 
                  in real environments. I prioritize maintainable, tested code over clever shortcuts.
                </p>
              </ContentBox>
              <ContentBox color="green-50">
                <p className="text-center">
                  <strong className="font-semibold text-green-700">Continuous learning:</strong> The web development landscape evolves rapidly. 
                  I stay current with best practices while focusing on fundamentals that remain valuable.
                </p>
              </ContentBox>
            </div>
          </section>

          {/* Experience Highlights */}
          <section>
            <SectionHeader title="Experience Highlights" gradient="from-yellow-500 to-amber-500" />
            <div className="space-y-8 text-center">
              <ContentBox color="blue" border={true}>
                <h3 className="font-bold text-xl text-blue-800 mb-3">Live Production Websites</h3>
                <p className="text-blue-700 mb-4 text-center">Successfully deployed and maintained multiple client websites</p>
                <ul className="mt-2 text-blue-700 space-y-2 inline-block">
                  <BulletListItem color="blue">Rosie's Janitorial Services - Service business website</BulletListItem>
                  <BulletListItem color="blue">ASME Consultoría - Professional services platform</BulletListItem>
                  <BulletListItem color="blue">CAM Amezcuas - Brand-focused marketing site</BulletListItem>
                  <BulletListItem color="blue">Servicios Financieros - Content-heavy financial services site</BulletListItem>
                </ul>
              </ContentBox>
              
              <ContentBox color="purple" border={true}>
                <h3 className="font-bold text-xl text-purple-800 mb-3">Active Development Projects</h3>
                <p className="text-purple-700 mb-4 text-center">Currently building and refining new applications</p>
                <ul className="mt-2 text-purple-700 space-y-2 inline-block">
                  <BulletListItem color="purple">DR All Season Travel - Scalable travel website</BulletListItem>
                  <BulletListItem color="purple">Mi Tandita - Mobile application development</BulletListItem>
                </ul>
              </ContentBox>
              
              <ContentBox color="green" border={true}>
                <h3 className="font-bold text-xl text-green-800 mb-3">Training & Education</h3>
                <p className="text-green-700 mb-4 text-center">Structured learning through TripleTen program</p>
                <ul className="mt-2 text-green-700 space-y-2 inline-block">
                  <BulletListItem color="green">Around the U.S. - Responsive layout and DOM manipulation</BulletListItem>
                  <BulletListItem color="green">Homeland - Component-based architecture</BulletListItem>
                  <BulletListItem color="green">Coffee Shop - Semantic HTML and CSS fundamentals</BulletListItem>
                </ul>
              </ContentBox>
            </div>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-gray-200">
            <SectionHeader title="Get In Touch" gradient="from-gray-500 to-gray-700" />
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:info@codevostudio.com"
                className="p-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all text-center"
              >
                <div className="flex flex-col items-center">
                  <Mail size={24} className="mb-3" />
                  <span>info@codevostudio.com</span>
                </div>
              </a>
              <a
                href="mailto:mc1986.99@gmail.com"
                className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all text-center"
              >
                <div className="flex flex-col items-center">
                  <Mail size={24} className="mb-3" />
                  <span>mc1986.99@gmail.com</span>
                </div>
              </a>
              <a
                href="https://github.com/cnote86"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:from-gray-800 hover:to-gray-950 transition-all text-center"
              >
                <div className="flex flex-col items-center">
                  <FiGithub size={24} className="mb-3" />
                  <span>GitHub Profile</span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}