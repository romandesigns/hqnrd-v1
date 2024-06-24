import { Brand, NotFoundCode } from "@/app/ui/features";
import { GoHomeFill } from "@/app/ui/icons";
import { Button } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Brand className="mb-10" />
      <NotFoundCode />
      <h2 className="text-2xl font-bold">The Page Not Found</h2>
      <p className="my-10 font-semibold">
        The room you&lsquo;re looking for does not exist!
      </p>
      <Link href="/">
        <Button
          size="large"
          icon={<GoHomeFill />}
          className="!flex !items-center"
        >
          Return Home
        </Button>
      </Link>
    </main>
  );
}
