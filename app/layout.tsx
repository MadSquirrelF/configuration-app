import "@/src/app/styles/globals.scss";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/src/shared/config/site";
import { fontSans } from "@/src/shared/config/fonts";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(process.env.APP_URL as string),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    emails: ["configurationApp@mail.ru"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="h-full bg-background" lang="ru">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-row bg-background min-h-screen w-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
