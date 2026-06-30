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
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-14 flex items-center justify-center">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight text-muted-foreground"
            >
              {appName}
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {appName}
          </div>
        </footer>
      </body>
    </html>
  );
}
