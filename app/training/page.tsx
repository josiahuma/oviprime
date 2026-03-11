import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const trainings = [
  {
    title: "Business Analysis Training",
    image: "/images/training-business-analysis.jpg",
    description:
      "Learn how to gather requirements, analyse business needs, create process documentation, and support organisations in delivering successful digital and operational change.",
    duration: "8 Weeks",
    mode: "Online / Hybrid",
  },
  {
    title: "IT Support Training",
    image: "/images/training-it-support.jpg",
    description:
      "Build practical skills in troubleshooting, help desk operations, hardware and software support, networking basics, and customer-focused technical support.",
    duration: "6 Weeks",
    mode: "Online / Hybrid",
  },
  {
    title: "Web Development Training",
    image: "/images/training-web-development.jpg",
    description:
      "Gain hands-on experience in HTML, CSS, JavaScript, responsive design, and modern web development practices needed to start building professional websites and applications.",
    duration: "12 Weeks",
    mode: "Online / Hybrid",
  },
];

export default function TrainingPage() {
  return (
    <>
      <Navbar />
        <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-[#eef7ff]">
            <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Training Programmes
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl">
                Professional training programmes designed to build real-world digital skills
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Explore Oviprime training programmes designed for aspiring professionals,
                career changers, and organisations looking to build practical technology
                capability and confidence.
            </p>
            </div>
        </section>

        {/* TRAINING CARDS */}
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-3">
                {trainings.map((training) => (
                <article
                    key={training.title}
                    className="overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(14,165,233,0.10)]"
                >
                    <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={training.image}
                        alt={training.title}
                        fill
                        className="object-cover"
                    />
                    </div>

                    <div className="p-8">
                    <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.15em]">
                        <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                        {training.duration}
                        </span>
                        <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                        {training.mode}
                        </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                        {training.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        {training.description}
                    </p>

                    <div className="mt-8">
                        <a
                        href="https://eventib.com/organizers/oviprime"
                        className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
                        >
                        Register Now
                        </a>
                    </div>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </section>
        </main>
        <Footer />
    </>
  );
}