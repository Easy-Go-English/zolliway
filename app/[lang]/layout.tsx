import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDict, langs } from "@/lib/i18n";
import "../globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDict(lang);
  return {
    title: {
      default: dict.meta.title,
      template: "%s · Zolliway",
    },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = getDict(lang);
  return (
    <html lang={lang}>
      <body className={`${newsreader.variable} ${publicSans.variable} antialiased`}>
        <Header lang={lang} nav={dict.nav} />
        <main>{children}</main>
        <Footer lang={lang} nav={dict.nav} />
      </body>
    </html>
  );
}
