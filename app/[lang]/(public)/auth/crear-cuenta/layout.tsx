import { Locale } from "@/i18n-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <main className="relative flex min-h-lvh items-center justify-center lg:p-10">
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] grid grid-cols-1 bg-white xs:p-2 sm:max-w-5xl lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:grid-cols-[3fr_2fr] lg:rounded-md">
        {children}
      </section>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] rounded-md bg-black/20 backdrop-blur-xl backdrop-filter" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-cover bg-center bg-no-repeat" />
    </main>
  );
}
