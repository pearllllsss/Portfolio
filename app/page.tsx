"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import ContactSection from "./components/contactsection";
import Reveal from "./components/reveal";
export default function Page() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f3efe8]">
      <header className="px-6 pt-10 md:px-12">
  <div className="sticky top-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-md py-4">
          <Reveal><h1 className="text-center font-serif text-6xl leading-none md:text-8xl">
            Rita Soboh</h1>
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
              href="https://instagram.com/"
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
        <section className="grid min-h-[140vh] gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Reveal>
            <img
              src="/images/closeup.jpg.jpeg"
              alt="Portrait 1"
              className="h-[540px] w-full object-cover"
            />
            </Reveal>
          </div>

          <div className="md:pt-24">
            <Reveal>
            <img
              src="/images/back.jpeg"
              alt="Portrait 2"
              className="h-[540px] w-full object-cover"
            />
            </Reveal>
          </div>
        </section>
<ContactSection />
      </main>
    </div>
  );
}