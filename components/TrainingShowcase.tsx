import Image from "next/image";

export default function TrainingShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-[#f8fbff] to-[#eef7ff]">


      <div className="mx-auto grid min-h-[220px] max-w-7xl items-end gap-12 px-6 pt-20 lg:grid-cols-2 lg:gap-16">
        {/* TEXT */}
        <div className="pb-20 lg:pb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Skill Training
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Helping professionals transition into tech
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Our training programmes are designed for individuals who want to break into the technology industry. We focus on practical skills, real-world projects, and career preparation so learners can confidently move into technical roles.
          </p>

          <div className="mt-8 space-y-5 text-slate-800">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-3 w-3 rounded-full bg-sky-500"></div>
              <span>Corporate digital skills training</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-3 w-3 rounded-full bg-sky-500"></div>
              <span>Hands-on workshops and learning sessions</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-3 w-3 rounded-full bg-sky-500"></div>
              <span>Technical interview preparation</span>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex items-end justify-center lg:justify-end">
          <Image
            src="/images/training-woman.png"
            alt="Learning with laptop"
            width={1200}
            height={1200}
            className="relative z-10 h-auto w-full max-w-[760px] object-contain object-bottom lg:translate-x-8"
          />
        </div>
      </div>
    </section>
  );
}