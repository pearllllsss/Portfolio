import Link from "next/link";
import ContactSection from "../components/contactsection";
import Reveal from "../components/reveal";
export default function PortfolioPage() {
  const images = [
    "/images/closeup1.jpg",
    "/images/wallstand.jpg",
    "/images/sitting.jpg",
    "/images/closeup3.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f3efe8]">
      <header className="px-6 pt-10 md:px-12">
        <div className="mb-16 text-center">
  <Reveal>
    <h1 className="font-serif text-6xl leading-none md:text-8xl tracking-tight">
      Rita Soboh
    </h1>
  </Reveal>
          <nav className="mt-8 flex items-center justify-center gap-8 text-sm md:gap-10">
            <Link href="/" className="pb-1 hover:text-[#d1b08a]">
              home
            </Link>
            <Link href="/about" className="pb-1 hover:text-[#d1b08a]">
              about
            </Link>
            <Link href="/digitals" className="pb-1 hover:text-[#d1b08a]">
              digitals
            </Link>
            <Link
              href="/portfolio"
              className="border-b border-[#d1b08a] pb-1 text-[#f3efe8]"
            >
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

        <div className="grid gap-12 pb-20 md:grid-cols-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 1 ? "md:translate-y-24" : ""
              } transition-transform duration-300`}
            >
              <Reveal>
              <img
                src={img}
                alt={`Portfolio ${i + 1}`}
                className="h-[520px] w-full object-cover"
              />
              </Reveal>
            </div>
          ))}
        </div>
        <ContactSection/>
      </main>
    </div>
  );
}