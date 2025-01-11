// /pages/letters.tsx

import React from "react";

const LettersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Letters</h1>
          <p className="text-lg text-gray-600 mb-8">
            A collection of my thoughts and reflections on the role of AI, machine learning, and ethics in shaping our future.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Letter to the Future</h2>
              <p className="text-gray-600 mb-2">
                A reflection on the role of robotics and AI in shaping the world of tomorrow.
              </p>
              <a
                href="/letters/future"
                className="text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Open Letter to Researchers</h2>
              <p className="text-gray-600 mb-2">
                Discussing collaboration and ethics in the field of machine learning.
              </p>
              <a
                href="/letters/researchers"
                className="text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LettersPage;
