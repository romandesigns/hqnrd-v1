"use client";
import ErrorBody from "@/app/ui/components/site/Error";
import { useSearchParams } from "next/navigation";

export default function ErrorPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const searchParams = useSearchParams();

  return (
    <ErrorBody lang={lang}>
      <p className="text-sm font-medium text-neutral-600">
        {searchParams.get("error") || "An error occurred"}
      </p>
    </ErrorBody>
  );
}
