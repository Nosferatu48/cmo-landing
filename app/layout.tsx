import type { Metadata } from "next";
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
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
