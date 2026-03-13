import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/images/oviprime-logo.png"
            alt="Oviprime logo"
            width={180}
            height={50}
            priority
            className="h-auto w-auto max-h-12 object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a 
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Home
          </a>
          <a
            href="/training"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Training
          </a>
          <a
            href="/#services"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Services
          </a>
          <a
            href="/#about"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            About
          </a>
          <a
            href="/#why"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Why Us
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Contact
          </a>
        </nav>

        <a
          href="/#contact"
          className="rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}