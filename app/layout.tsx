import "../styles/globals.css";
import type { Metadata } from 'next'
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

 
export const metadata: Metadata = {
  title: "Rakshit's Blog",
  description: "Machine Learning indepth articles.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
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
              <a href="#letters" className="text-gray-600 hover:text-gray-900">Letters</a> {/* New Link */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );

  const footer = (
      <footer className="bg-gray-50 border-t border-gray-200">
        {/* Footer */}
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
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto  max-w-5xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
