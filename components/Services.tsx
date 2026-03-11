import Link from "next/link";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Tech Career Training",
    icon: AcademicCapIcon,
    href: "/training",
    description:
      "We train individuals looking to upskill or transition into technology careers through practical, industry-focused learning programmes.",
    points: [
      "Career switch programmes into tech",
      "Hands-on technical training",
      "Real-world project experience",
    ],
  },
  {
    title: "Custom Software Development",
    icon: CodeBracketIcon,
    href: "https://cre8hub.com",
    description:
      "We design and build custom software solutions tailored to your organisation's unique needs.",
    points: [
      "Custom software design and development",
      "Agile development methodologies",
      "End-to-end project management",
    ],
  },
  {
    title: "Corporate Training & IT Consultancy",
    icon: BuildingOffice2Icon,
    href: "/consulting",
    description:
      "We help organisations strengthen their digital capability through professional training programmes and strategic technology consultancy.",
    points: [
      "Corporate technology training",
      "Digital transformation advisory",
      "Technology strategy consulting",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What Oviprime does best
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We combine expertise in learning, technology, and delivery to help
            businesses and professionals move forward with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-[28px] border border-sky-100 bg-gradient-to-br from-white to-sky-50/40 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_40px_rgba(14,165,233,0.10)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 ring-1 ring-sky-200 transition group-hover:bg-sky-700 group-hover:ring-sky-500">
                <service.icon className="h-6 w-6 text-sky-600 transition group-hover:text-white" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-500"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}