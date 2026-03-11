import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-[#f8fbff] to-[#eef7ff]">
      <div className="absolute -top-20 -right-24 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-[220px] max-w-7xl items-end gap-10 px-6 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-24">
        {/* LEFT TEXT */}
        <div className="pb-20 lg:pb-24">
          <div className="mb-5 inline-block rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            Empowering people and organisations through technology
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-5xl">
            Building digital capability for modern organisations.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Oviprime Limited helps individuals transition into technology careers and supports organisations through professional training, IT consultancy, and software development delivered by our development partner Cre8Hub.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-end justify-center lg:justify-end">
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 z-0 h-20 w-[70%] -translate-x-1/2 rounded-full bg-sky-900/5 blur-2xl"></div>

          <Image
            src="/images/hero-team.png"
            alt="Professionals collaborating"
            width={1920}
            height={1080}
            priority
            className="relative z-10 h-auto w-full max-w-[700px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}