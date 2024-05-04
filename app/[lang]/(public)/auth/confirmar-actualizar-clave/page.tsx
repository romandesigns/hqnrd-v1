import { Input, Button } from "antd";
import {
  Backdrop,
  Blurdrop,
  HeadingSection,
  Brand,
  GoBack,
} from "@/app/ui/features";
import { passwordRecoveryAction } from "@/utils/actions";

export default async function Page({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams: { code: string };
}) {
  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full flex-col items-center justify-center bg-white p-4 sm:relative sm:h-auto sm:max-w-lg sm:rounded-md">
        <article className="align-center grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] justify-center gap-3 rounded-md border p-2 text-center">
          <div className="flex w-full items-start justify-start self-start pl-2 pt-2 lg:pb-10">
            <GoBack />
          </div>
          <div className="flex flex-col items-center justify-center sm:pb-10 lg:space-y-6">
            <Brand />
            <HeadingSection
              highlight={
                !searchParams.code ? "Password Recovery" : "Enter New Password"
              }
              title=""
              className="relative z-[4] lg:my-1"
            />
            {!searchParams.code ? (
              <form autoComplete="off" className="space-y-5">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  size="large"
                  required
                />
                <Input
                  type="text"
                  name="lang"
                  value={lang}
                  className="!hidden"
                />
                <Button
                  htmlType="submit"
                  type="primary"
                  block
                  size="large"
                  formAction={passwordRecoveryAction}
                >
                  Confirm
                </Button>
              </form>
            ) : (
              <form
                action={passwordRecoveryAction}
                autoComplete="off"
                className="space-y-5 px-20"
              >
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  size="large"
                  required
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  size="large"
                  required
                />
                <Input
                  type="text"
                  name="lang"
                  value={lang}
                  className="!hidden"
                />
                <Button htmlType="submit" type="primary" block size="large">
                  Confirm
                </Button>
              </form>
            )}
          </div>
        </article>
      </section>
      <Blurdrop blurLevel="xl" />
      <Backdrop backgroundImg="bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')]" />
    </main>
  );
}
