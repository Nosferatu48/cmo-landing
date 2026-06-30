"use client";

import Image from "next/image";
import { cmoProfile } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f5f7] overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-32 sm:py-40 text-center">
        <div className="mb-12 flex justify-center">
          <div className="h-32 w-32 overflow-hidden rounded-full shadow-xl ring-4 ring-white sm:h-36 sm:w-36">
            <Image
              src={cmoProfile.avatar.src}
              alt={cmoProfile.name}
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-[#1d1d1f] sm:text-7xl lg:text-8xl">
            {cmoProfile.name}
          </h1>
          <p className="text-xl text-[#6e6e73] font-light sm:text-2xl lg:text-3xl">
            {cmoProfile.title}
          </p>
          <p className="mx-auto max-w-2xl text-lg text-[#6e6e73]/70 sm:text-xl">
            {cmoProfile.tagline}
          </p>
        </div>
        <div className="mt-12">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#0077ed]"
          >
            Связаться
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
