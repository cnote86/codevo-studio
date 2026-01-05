"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import InfoBox from "@/components/ui/InfoBox";
import PageHeader from "@/components/ui/PageHeader";

export default function ContactPage() {
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
        <PageHeader
  backHref="/"
  pill="Get In Touch"
  title="Get In Touch"
  subtitle="Interested in working together? Let's connect."
/>
        {/* Contact Info */}
        <Card className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
              </div>
              <div className="space-y-6">
                <InfoBox className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:mc1986.99@gmail.com" 
                      className="block text-blue-600 hover:underline text-lg font-medium flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      mc1986.99@gmail.com
                    </a>
                    <a 
                      href="mailto:info@codevostudio.com" 
                      className="block text-blue-600 hover:underline text-lg font-medium flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      info@codevostudio.com
                    </a>
                  </div>
                </InfoBox>
                
                <InfoBox className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-700 text-lg">Remote / Available for relocation</p>
                </InfoBox>
                
                <InfoBox className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Availability</h3>
                  <p className="text-gray-700 text-lg">Open to new opportunities</p>
                </InfoBox>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Connect</h2>
              </div>
              <div className="space-y-6">
                <InfoBox className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/cnote86" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg font-medium inline-block w-full flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    github.com/cnote86
                  </a>
                </InfoBox>
                
                <InfoBox className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mario-ricardo-campos-hernandez-913642169" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg font-medium inline-block w-full flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn Profile
                  </a>
                </InfoBox>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">Send a Message</h2>
          </div>
          
          <form id="contactForm" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={6} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                placeholder="Tell me about your project or how I can help..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/40"
            >
              Send Message
            </button>
          </form>
          
          <div id="formMessage" className="mt-4 hidden p-4 rounded-lg"></div>
          
          <script dangerouslySetInnerHTML={{__html: `
            document.getElementById('contactForm').addEventListener('submit', async (e) => {
              e.preventDefault();
              
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              
              const result = await response.json();
              const messageEl = document.getElementById('formMessage');
              
              if (response.ok) {
                messageEl.className = 'mt-4 p-4 bg-green-100 text-green-800 rounded-lg';
                messageEl.innerHTML = 'Message sent successfully! I will get back to you soon.';
                e.target.reset();
              } else {
                messageEl.className = 'mt-4 p-4 bg-red-100 text-red-800 rounded-lg';
                messageEl.innerHTML = result.error || 'Failed to send message. Please try again.';
              }
              
              messageEl.classList.remove('hidden');
              
              // Hide message after 5 seconds
              setTimeout(() => {
                messageEl.classList.add('hidden');
              }, 5000);
            });
          `}} />
        </Card>
      </div>
    </div>
  );
}