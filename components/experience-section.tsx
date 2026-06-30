"use client";

import { experience } from "@/lib/data";
import { LineChart, Rocket, UserPlus, Package } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "line-chart": LineChart,
  rocket: Rocket,
  "user-plus": UserPlus,
  package: Package,
};

export function ExperienceSection() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Опыт работы
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            Ключевые места работы и достижения
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {experience.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.company}
                className="rounded-2xl border border-[#d2d2d7] p-6 transition-all hover:shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{item.company}</h3>
                    <p className="mt-0.5 text-sm font-medium text-[#0071e3]">{item.position}</p>
                    <span className="mt-1 inline-block rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-xs text-[#6e6e73]">
                      {item.period}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
