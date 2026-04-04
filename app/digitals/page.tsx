import Link from "next/link";
import ContactSection from "../components/contactsection";
import Reveal from "../components/reveal";
export default function DigitalsPage() {
  const digitals = [
    {
      title: "Front View",
    },
    {
      title: "Side Profile",
    },
    {
      title: "Full Length",
      
    },
    {
      title: "Close Up",
      
    },
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
            <Link
              href="/digitals"
              className="border-b border-[#d1b08a] pb-1 text-[#f3efe8]"
            >
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
    

        <div className="grid gap-12 pb-20 md:grid-cols-2">
          {digitals.map((item, i) => (
            <div
              key={item.title}
              className={`${i % 2 === 1 ? "md:translate-y-24" : ""}`}
            >
            <Reveal>
      <img
        src={item.image}
        alt={item.title}
        className="h-[560px] w-full object-cover"
      />
    </Reveal>

    <Reveal delay={0.3}>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#d1b08a]">
        {item.title}
      </p>
    </Reveal>  

            </div>
          ))}
        </div>
        <ContactSection/>
      </main>
    </div>
  );
}