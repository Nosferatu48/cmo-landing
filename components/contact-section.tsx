"use client";

import { contactInfo } from "@/lib/data";
import { Mail, Globe, Send, ExternalLink, MessagesSquare } from "lucide-react";
import { useState } from "react";

const contacts = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
  { label: "LinkedIn", value: contactInfo.linkedIn.replace("https://", ""), href: contactInfo.linkedIn, icon: Globe },
  { label: "Telegram", value: contactInfo.telegram.replace("https://t.me/", "@"), href: contactInfo.telegram, icon: Send },
  { label: "Все соцсети", value: contactInfo.etagStore.replace("https://", ""), href: contactInfo.etagStore, icon: ExternalLink },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, message }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setStatus("success");
      setName("");
      setSenderEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section id="contacts" className="py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Контакты
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            Свяжитесь со мной удобным способом
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
                  className="block"
                >
                  <div className="rounded-2xl border border-[#d2d2d7] p-6 transition-all hover:shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#6e6e73]">{contact.label}</p>
                        <p className="mt-0.5 text-base font-semibold text-[#1d1d1f]">{contact.value}</p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="rounded-2xl border border-[#d2d2d7] p-6 sm:p-8 transition-all hover:shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071e3]/5 text-[#0071e3]">
                <MessagesSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">Написать мне</h3>
                <p className="text-sm text-[#6e6e73]">Заполните форму и я отвечу в ближайшее время</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                placeholder="Ваше имя *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
              />
              <input
                type="email"
                placeholder="Ваш email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
              />
              <textarea
                placeholder="Ваше сообщение *"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[120px] rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0077ed] disabled:opacity-50"
              >
                {status === "loading" ? "Отправка..." : status === "success" ? "Отправлено ✓" : status === "error" ? "Ошибка" : "Отправить"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
