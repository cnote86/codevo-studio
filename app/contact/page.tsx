"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import InfoBox from "@/components/ui/InfoBox";
import PageHeader from "@/components/ui/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
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
                      className="block text-blue-600 hover:underline text-lg font-medium"
                    >
                      mc1986.99@gmail.com
                    </a>
                    <a 
                      href="mailto:info@codevostudio.com" 
                      className="block text-blue-600 hover:underline text-lg font-medium"
                    >
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
                    className="text-blue-600 hover:underline text-lg font-medium inline-block w-full"
                  >
                    github.com/cnote86
                  </a>
                </InfoBox>
                
                <InfoBox className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mario-ricardo-campos-hernandez-913642169" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg font-medium inline-block w-full"
                  >
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
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
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