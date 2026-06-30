"use client";

import { education } from "@/lib/data";
import { GraduationCap, Megaphone, BarChart3, ShoppingBag, FileText, Target, Globe } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  megaphone: Megaphone,
  "bar-chart-3": BarChart3,
  "shopping-bag": ShoppingBag,
  "file-text": FileText,
  target: Target,
  globe: Globe,
};

export function EducationSection() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Образование
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            Высшее образование и ключевые курсы
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#d2d2d7] p-6 transition-all hover:shadow-sm sm:col-span-2">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-[#1d1d1f]">{education.university.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-[#0071e3]">{education.university.faculty}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6e6e73]">{education.university.specialty}</p>
                <span className="mt-2 inline-block rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-xs text-[#6e6e73]">
                  {education.university.year}
                </span>
              </div>
            </div>
          </div>

          {education.courses.map((course) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={course.title}
                className="rounded-2xl border border-[#d2d2d7] p-6 transition-all hover:shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{course.title}</h3>
                    <p className="mt-1 text-sm text-[#6e6e73]">{course.source}</p>
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
