export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-gray-300 font-inter">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          At <span className="text-white font-semibold">WordNext</span>, we
          believe in the power of storytelling. Whether you're here for tech,
          lifestyle, or self-growth — you're in the right place.
        </p>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-gray-800 text-center rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">
            📘 Our Mission
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            To deliver content that inspires, informs, and empowers you in the
            digital and real world alike.
          </p>
        </div>
        <div className="bg-gray-800 text-center rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">👥 Our Team</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We're creators, coders, and thinkers passionate about sharing
            valuable ideas with real impact.
          </p>
        </div>
        <div className="bg-gray-800 text-center rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">
            🚀 Topics We Love
          </h2>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Tech & Programming</li>
            <li>Mindfulness & Growth</li>
            <li>Trends & Inspiration</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-12 mt-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Want to Reach Out?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          We’d love to connect, collaborate, or just chat about ideas. Let’s
          build something meaningful together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-sky-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-600 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
