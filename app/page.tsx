"use client";

import Link from "next/link";
import ContactSection from "./components/contactsection";
import Reveal from "./components/reveal";

export default function Page() {
  const homeImages = [
    {
      src: "/images/closeup.jpg.jpeg",
      alt: "Portrait 1",
      title: "Beauty Close Up",
      offset: false,
    },
    {
      src: "/images/runway1.jpg",
      alt: "Portrait 2",
      title: "Fashion Students Runway | Florence, Italy",
      offset: true,
    },
    {
      src: "/images/afp1.jpg",
      alt: "Portrait 3",
      title: "Editorial Portrait",
      offset: false,
    },
    {
      src: "/images/stairs.jpg",
      alt: "Portrait 4",
      title: "Stairs Editorial",
      offset: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f3efe8]">
      <header className="px-6 pt-10 md:px-12">
        <div className="sticky top-0 z-50 bg-[#1f1f1f]/90 py-4 backdrop-blur-md">
          <Reveal>
            <h1 className="text-center font-serif text-6xl leading-none md:text-8xl">
              Rita Soboh
            </h1>
          </Reveal>

          <nav className="mt-8 flex items-center justify-center gap-8 text-sm md:gap-10">
            <Link
              href="/"
              className="border-b border-[#d1b08a] pb-1 text-[#f3efe8]"
            >
              home
            </Link>
            <Link href="/about" className="pb-1 hover:text-[#d1b08a]">
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

      <main className="mx-auto mt-12 max-w-7xl px-6 pb-16 md:px-12">
        <section className="grid gap-10 md:grid-cols-2 md:items-start">
          {homeImages.map((img, i) => (
            <div key={i} className={img.offset ? "md:pt-24" : ""}>
              <Reveal>
                <div>
                  <p className="mb-4 text-[15px] uppercase tracking-[0.28em] text-[#d1b08a]">
                    {img.title}
                  </p>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-[540px] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </section>

        <ContactSection />
      </main>
    </div>
  );
}