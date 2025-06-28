// app/contact/page.js (for App Router)

const ContactPage = () => {
  return (
   <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 font-inter">
  <div className="max-w-3xl mx-auto bg-[#0f0f0f] rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 border border-yellow-500/30">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-yellow-400 leading-tight mb-4 tracking-wide">
        Get In Touch
      </h1>
      <p className="text-lg text-yellow-300/90 max-w-xl mx-auto">
        Have a question, feedback, or just want to say hello? Fill out the form and we'll get back to you shortly.
      </p>
    </div>

    <form className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-yellow-400 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-5 py-3 bg-zinc-900 border border-yellow-500/20 text-yellow-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-yellow-500/40 transition-all duration-300"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-yellow-400 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-5 py-3 bg-zinc-900 border border-yellow-500/20 text-yellow-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-yellow-500/40 transition-all duration-300"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-yellow-400 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-5 py-3 bg-zinc-900 border border-yellow-500/20 text-yellow-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-yellow-500/40 transition-all duration-300"
          placeholder="Regarding a blog post..."
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-yellow-400 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="w-full px-5 py-3 bg-zinc-900 border border-yellow-500/20 text-yellow-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-yellow-500/40 resize-y transition-all duration-300"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-10 border border-yellow-500 text-lg font-bold rounded-full text-black bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default ContactPage;
