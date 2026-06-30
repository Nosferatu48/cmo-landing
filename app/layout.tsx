import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const appName = "Писарева Виктория — CMO";

export const metadata: Metadata = {
  title: appName,
  description: appName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen bg-white flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-[#d2d2d7] bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-center">
            <Link href="/" className="text-sm font-medium text-[#6e6e73] tracking-tight">
              {appName}
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#d2d2d7]">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-[#6e6e73]">
            © {new Date().getFullYear()} {appName}
          </div>
        </footer>
      </body>
    </html>
  );
}
