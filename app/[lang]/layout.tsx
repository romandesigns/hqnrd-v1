import { AntdRegistry } from "@ant-design/nextjs-registry";

import type { Metadata } from "next";
import { poppins } from "../ui/typography";
import "./../ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Locale, i18n } from "@/i18n-config";

import { FontUnitProvider } from "../ui/typography/FontUnitProvider";
import AntConfigProvider from "@/providers/ConfigProvider";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={lang} className={"min-h-dvh"}>
      <AntConfigProvider lang={lang}>
        <AntdRegistry>
          <body className={`${poppins.className} min-h-dvh`}>{children}</body>
        </AntdRegistry>
      </AntConfigProvider>
    </html>
  );
}
