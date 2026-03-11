const highlights = [
  "Career transition training into tech",
  "Corporate training for organisations",
  "Technology consulting expertise",
  "Software development via Cre8Hub",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#081120] text-white"
    >
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-500/5 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            About Oviprime
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A modern technology company focused on practical results.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Oviprime Limited is a technology training and consultancy company focused on building digital capability for both individuals and organisations. 
            We help aspiring professionals transition into technology careers through structured training and interview preparation, while also supporting organisations through corporate training, IT consultancy, and software solutions delivered via our development partner Cre8Hub.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-sky-400/20 hover:bg-white/8"
            >
              <p className="text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}