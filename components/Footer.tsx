export default function Contact() {
  return (
    <>
      <footer id="contact" className="bg-gradient-to-r from-sky-900 to-sky-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl">
                Let&apos;s explore how Oviprime can support your skills, career, or organisation.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8">
                Whether you are looking to start a career in technology, upskill your workforce, or develop custom software solutions, Oviprime Limited is ready to help.
              </p>
            </div>

            <form
              id="contact-form"
              className="rounded-[28px] border border-sky-100 bg-sky-50/30 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400"
                />
                <input
                  type="text"
                  placeholder="Company / organisation"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400"
                />
                <textarea
                  placeholder="How can we help?"
                  className="min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400"
                />
                <button
                  type="submit"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm  lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 Oviprime Limited. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#services" className="hover:text-orange-600">
            Services
          </a>
          <a href="#about" className="hover:text-orange-600">
            About
          </a>
          <a href="#contact" className="hover:text-orange-600">
            Contact
          </a>
        </div>
      </div>
      </footer>
    </>
  );
}