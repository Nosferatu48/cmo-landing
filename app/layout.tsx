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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#ffffff", color: "#1d1d1f", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif" }}>
        <header style={{ position: "sticky", top: 0, zIndex: 50, width: "100%", borderBottom: "1px solid #d2d2d7", backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}>
          <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 16px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link href="/" style={{ fontSize: "14px", fontWeight: 500, color: "#6e6e73", textDecoration: "none", letterSpacing: "-0.01em" }}>
              {appName}
            </Link>
          </div>
        </header>
        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{ borderTop: "1px solid #d2d2d7" }}>
          <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "24px 16px", textAlign: "center", fontSize: "12px", color: "#6e6e73" }}>
            © {new Date().getFullYear()} {appName}
          </div>
        </footer>
      </body>
    </html>
  );
}
