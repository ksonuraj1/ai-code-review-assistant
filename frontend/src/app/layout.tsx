import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Code Review Assistant",
  description: "AI powered code review platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
