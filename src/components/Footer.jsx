import Link from "next/link";
import SubHeading from "./SubHeading";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="text-[#352514] pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <Link href="/" className="text-3xl font-bold tracking-wider block mb-4">
                Legal Ease
              </Link>
              <p className=" max-w-sm leading-relaxed text-justify">
                LegalEase is a digital platform that connects legal seekers,
                clients, and businesses with talented lawyers.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#43311c] transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#43311c] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:pl-8">
            <SubHeading text="Quick Link" />
            <ul className="space-y-3 ">
              <li>
                <Link
                  href="/"
                  className="text-[#c7bca9] hover:text-black transition-colors duration-200 block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#c7bca9] hover:text-black transition-colors duration-200 block py-0.5"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#c7bca9] hover:text-black transition-colors duration-200 block py-0.5"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#c7bca9] hover:text-black transition-colors duration-200 block py-0.5"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 flex flex-col justify-start">
            <SubHeading text="Newsletter" />
            <p className="] mb-4 leading-relaxed">
              Subscribe to our legal briefings for analytical reviews of
              corporate governance regulations and Supreme Court updates.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="Your Email" className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2" />
              <Button type="action" variant="dark" text="Subscribe" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Legal Ease. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">
              Terms of Engagement
            </a>
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
