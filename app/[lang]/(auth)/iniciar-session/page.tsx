import { Button, Input } from "antd";
import { signIn } from "../actions";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export default function LoginPage({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  return (
    <section className="p-2">
      <form>
        <label htmlFor="email">Email:</label>
        <Input size="middle" id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <Input
          size="middle"
          id="password"
          name="password"
          type="password"
          required
        />
        <Button formAction={signIn} htmlType="submit" type="primary">
          Sign In
        </Button>
      </form>
      <div className="my-4">
        <p className="text-xs font-medium text-center">
          Don&#39;t have an account?{" "}
          <Link
            href={`/${lang}/crear-cuenta`}
            className="ml-2 underline text-primary-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
