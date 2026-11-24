import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { I18nProvider } from "@/components/providers/I18nProvider";

export const metadata: Metadata = {
  title: "PromptForge AI",
  description: "AI-powered prompt generator for design, build, fix, deploy, and planning workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full font-sans text-slate-100">
        <I18nProvider>
          <div className="pf-app">
            <AppShell>{children}</AppShell>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
