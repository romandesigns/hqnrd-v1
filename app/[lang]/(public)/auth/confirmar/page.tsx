"use client";

import { Backdrop, Blurdrop, ConfettiComponent } from "@/app/ui/features";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const params = useSearchParams();

  const name = params.get("name");
  const email = params.get("email");

  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-white p-4 sm:relative sm:h-auto sm:max-w-lg sm:rounded-md">
        <article className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-3 rounded-md border p-2 py-16 text-center">
          <h1 className="mb-0 text-2xl font-bold">
            Congratulations {name} 🎉🎊!
          </h1>
          <p className="text-center text-sm">
            We sent a e-mail confirmation link to <b>{email}</b>, please click
            the link to confirm you&apos;re account.
          </p>
        </article>
      </section>
      <ConfettiComponent />
      <Blurdrop blurLevel="xl" />
      <Backdrop backgroundImg="bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')]" />
    </main>
  );
}
