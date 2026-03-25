import { Mail, MapPin, AtSign } from "lucide-react";
import Reveal from "./reveal";
export default function ContactSection() {
  return (
    <Reveal delay={0.2}>
    <section className="mt-20 border-t border-white/10 pt-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#d1b08a]">
            Instagram
          </p>
         <a
  href="https://instagram.com/pearllllsss"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 flex items-center text-[#d1b08a] hover:scale-110 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-7 w-5"
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.505 4.505 0 0 1 12 7.5zm0 7.5A3 3 0 1 0 9 12a3 3 0 0 0 3 3zm4.75-7.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
  </svg>
</a>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#d1b08a]">
            <Mail className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.25em]">Email</p>
          </div>
          <p className="mt-3 text-lg break-words">rita.sobohhh@gmail.com</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#d1b08a]">
            <MapPin className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.25em]">Location</p>
          </div>
          <p className="mt-3 text-lg">Turin · Milan · Europe</p>
        </div>
      </div>
      <p className="mt-10 text-xs text-center text-white/40">
  © {new Date().getFullYear()} Rita Soboh. All images and content are protected. Unauthorized use is prohibited.
</p>
    </section>
    </Reveal>
  );
}