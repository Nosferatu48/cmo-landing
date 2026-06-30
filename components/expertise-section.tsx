"use client";

import { expertiseAreas, achievements } from "@/lib/data";
import { Target, TrendingUp, Users, BarChart3, Bot, LineChart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  "trending-up": TrendingUp,
  users: Users,
  "bar-chart-3": BarChart3,
  bot: Bot,
  "bar-chart-4": LineChart,
};

export function ExpertiseSection() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Экспертиза
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            Ключевые компетенции для роста вашего бизнеса
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {expertiseAreas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <div
                key={area.title}
                className="rounded-2xl border border-[#d2d2d7] p-6 transition-all hover:shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Цифры и результаты
          </h3>
          <p className="mt-3 text-lg text-[#6e6e73]">
            Опыт, подтверждённый проектами
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#d2d2d7] p-8 text-center transition-all hover:shadow-sm"
            >
              <p className="text-4xl font-bold tracking-tight text-[#0071e3] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium text-[#1d1d1f]">{stat.label}</p>
              <p className="mt-1 text-sm text-[#6e6e73]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
