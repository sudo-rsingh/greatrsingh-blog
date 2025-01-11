import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-gray-800">Alex Chen</span>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#research" className="text-gray-600 hover:text-gray-900">Research</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Exploring the Future of AI & Robotics
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                PhD Candidate in Computer Science
                <br />
                Stanford University
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:alex@example.com" className="text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a>
                <a href="/cv.pdf" className="text-gray-600 hover:text-gray-900">
                  <FileText size={24} />
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img
                src="/api/placeholder/300/300"
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="prose lg:prose-lg text-gray-600">
            <p className="mb-4">
              I'm a PhD candidate at Stanford University, focusing on the intersection
              of artificial intelligence and robotics. My research explores novel
              approaches to machine learning that can enhance robot perception and
              decision-making in complex environments.
            </p>
            <p>
              Previously, I worked as a research engineer at DeepMind, where I
              contributed to projects involving reinforcement learning and computer
              vision. I received my BS in Computer Science from MIT.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Adaptive Robot Learning
              </h3>
              <p className="text-gray-600">
                Developing new algorithms for robots to learn and adapt to changing
                environments through real-time sensor data and reinforcement learning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Multi-Agent Systems
              </h3>
              <p className="text-gray-600">
                Investigating coordination strategies for multiple robots working
                together in dynamic environments using distributed algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`/api/placeholder/400/250`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-gray-600">
                    Brief description of the project and its impact on the field
                    of robotics and AI.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Novel Approach to Robot Learning in Dynamic Environments
                </h3>
                <p className="text-gray-600 mb-2">
                  Chen, A., Smith, J., Johnson, K.
                </p>
                <p className="text-gray-500">
                  International Conference on Robotics and Automation (ICRA) 2024
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              © 2024 Alex Chen. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Github className="text-gray-600 hover:text-gray-900" size={20} />
              <Linkedin className="text-gray-600 hover:text-gray-900" size={20} />
              <Mail className="text-gray-600 hover:text-gray-900" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;