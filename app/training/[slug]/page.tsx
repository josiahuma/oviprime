import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { trainings } from "../../../lib/trainingCourses";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return trainings.map((training) => ({
    slug: training.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) {
    return {
      title: "Training Course | Oviprime",
    };
  }

  return {
    title: `${training.title} | Oviprime`,
    description: training.description,
  };
}

export default async function TrainingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-[#eef7ff]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
            <div>
              <Link
                href="/training"
                className="text-sm font-semibold text-sky-700 transition hover:text-sky-600"
              >
                ← Back to training programmes
              </Link>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Oviprime Training
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {training.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {training.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sky-800">
                  Duration: {training.duration}
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-slate-700 ring-1 ring-sky-100">
                  Mode: {training.mode}
                </span>
              </div>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-[32px] shadow-[0_18px_45px_rgba(14,165,233,0.14)]">
              <Image
                src={training.image}
                alt={training.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Course Curriculum
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What you will learn
              </h2>

              <div className="mt-8 grid gap-4">
                {training.curriculum.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50/40 p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[28px] border border-sky-100 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-slate-950">
                Course Information
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Duration</p>
                  <p className="mt-1 text-slate-900">{training.duration}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">Mode</p>
                  <p className="mt-1 text-slate-900">{training.mode}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">Start Date</p>
                  <p className="mt-1 text-slate-900">{training.startDate}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">Time</p>
                  <p className="mt-1 text-slate-900">{training.time}</p>
                </div>
              </div>

              <a
                href={training.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
               >
                Register Interest
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}