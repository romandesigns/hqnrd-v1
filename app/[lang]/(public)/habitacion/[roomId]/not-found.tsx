import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-full w-full items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>The page you&lsquo;re looking for does not exist!</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
