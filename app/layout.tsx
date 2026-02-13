import type { Metadata } from "next";

import "./globals.css";

import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `${content.site.name} | ${content.site.role}`,
  description: content.site.tagline
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
