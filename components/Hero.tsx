import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-[#f8fbff] to-[#eef7ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.16),transparent_22%)]"></div>
        <div className="relative mx-auto grid min-h-[220px] max-w-7xl items-end gap-10 px-6 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-24">
          <div>
            <div>
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

          <div className="relative flex items-end justify-center lg:justify-end">
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