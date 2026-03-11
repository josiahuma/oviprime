import Image from "next/image";

const reasons = [
  "Real career pathways into technology",
  "Hands-on practical training",
  "Corporate training and consulting expertise",
  "Software solutions through Cre8Hub",
];

const logos = [
  "/logos/company1.png",
  "/logos/company2.png",
  "/logos/company3.png",
  "/logos/company4.png",
  "/logos/company5.png",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-20">
      
      {/* WHY SECTION */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
            Professional expertise with a clear business focus.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We do not just deliver technology services. We help clients use
            technology well with clarity, purpose, and a focus on outcomes.
          </p>
        </div>

        <div className="rounded-3xl border border-sky-100 bg-sky-50/60 p-8 shadow-sm">
          <div className="space-y-6">
            {reasons.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-sky-500"></div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="mt-20 border-t border-slate-100 pt-10">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Organisations our talent and consultants have worked with
        </p>

        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Company logo"
                width={140}
                height={60}
                className="h-auto w-auto max-h-10 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}