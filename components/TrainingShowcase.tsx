import Image from "next/image";

export default function TrainingShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-[#f8fbff] to-[#eef7ff]">
      <div className="absolute -top-20 -right-24 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl"></div>

    </section>
  );
}