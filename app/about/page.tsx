import Link from "next/link";
import { MapPin } from "lucide-react";
import ContactSection from "../components/contactsection";
import Reveal from "../components/reveal";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f3efe8]">
      <header className="px-6 pt-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal><h1 className="text-center font-serif text-6xl leading-none md:text-8xl">
            Rita Soboh
          </h1>
          </Reveal>
          <nav className="mt-8 flex items-center justify-center gap-8 text-sm md:gap-10">
            <Link href="/" className="pb-1 hover:text-[#d1b08a]">
              home
            </Link>
            <Link
              href="/about"
              className="border-b border-[#d1b08a] pb-1 text-[#f3efe8]"
            >
              about
            </Link>
            <Link href="/digitals" className="pb-1 hover:text-[#d1b08a]">
              digitals
            </Link>
            <Link href="/portfolio" className="pb-1 hover:text-[#d1b08a]">
              portfolio
            </Link>
            <a
              href="https://instagram.com/pearllllsss"
              target="_blank"
              rel="noreferrer"
              className="pb-1 hover:text-[#d1b08a]"
            >
              instagram
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12">
        <section className="grid gap-12 md:grid-cols-2">
          <div>
            <Reveal delay={0.1}>
            <Image
  src="/images/necktie.jpg"
  alt="About portrait"
  width={992}
  height={1488}
  priority
  className="w-full h-auto object-cover"
/>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d1b08a]">
              About
            </p>
<Reveal>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl">
              Rita Soboh
            </h2>
</Reveal>
<Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#f3efe8]/90">
              I am a beginner model currently building my portfolio.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#f3efe8]/90">
              I am based in Turin and also available in Milan and some other close cities. At this stage, my focus is on creating clean
              portfolio images, and professional material for future modeling
              opportunities.
            </p>
</Reveal>
<Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-3 text-[#f3efe8]/80">
              <MapPin className="h-5 w-5 text-[#d1b08a]" />
              <p>Turin · Milan · Europe</p>
            </div>
</Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.03] p-5">
                <Reveal delay={0.3}>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d1b08a]">
                  Open To
                </p>
                <p className="mt-3 leading-8 text-[#f3efe8]/90">
                  Test shoots, agency applications, editorial, beauty, fashion,
                  and lifestyle projects.
                </p>
                </Reveal>
              </div>

              <div className="border border-white/10 bg-white/[0.03] p-5">
                <Reveal delay={0.3}><p className="text-xs uppercase tracking-[0.25em] text-[#d1b08a]">
                  Currently Building
                </p>
                <p className="mt-3 leading-8 text-[#f3efe8]/90">
                  Portfolio images, and a clean professional presence
                  for castings and applications.
                </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 flex justify-between items-start gap-12">
  <div>
   <Reveal>
    <h3 className="font-serif text-lg text-[#d1b08a] md:text-xl">Height</h3>
    <p className="mt-3 font-serif text-base text-[#f3efe8] md:text-lg">
      171cm / 5'7"
    </p>
    </Reveal>
  </div>

  <div>
<Reveal>
      <h3 className="font-serif text-lg text-[#d1b08a] md:text-xl">
      Eye Color
    </h3>
    <p className="mt-3 font-serif text-base text-[#f3efe8] md:text-lg">
      Hazel
    </p>
    </Reveal>
  </div>

  <div>
    <Reveal><h3 className="font-serif text-lg text-[#d1b08a] md:text-xl">
      Hair Color
    </h3>
    <p className="mt-3 font-serif text-base text-[#f3efe8] md:text-lg">
      Dark Brown
    </p>
    </Reveal>
  </div>

  <div>
   <Reveal><h3 className="font-serif text-lg text-[#d1b08a] md:text-xl">
      Measurements
    </h3>
    <p className="mt-3 font-serif text-base text-[#f3efe8] md:text-lg">
      Bust: 34in, Waist: 27in, Hips: 36in
    </p>
    </Reveal>
  </div>
</section>
<ContactSection />
      </main>
    </div>
  );
}