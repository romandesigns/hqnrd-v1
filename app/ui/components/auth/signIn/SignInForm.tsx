import { Locale } from "@/i18n-config";
import { signInUserAction } from "@/utils/actions";
import { Button, Input } from "antd";

export function SignInForm({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) {
  return (
    <>
      <form autoComplete="off" className="w-full">
        <fieldset className="mb-4 space-y-4">
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            size="large"
            required
          />
          <Input
            name="password"
            placeholder="contraseña"
            type="password"
            size="large"
            required
          />
          <input name="lang" type="hidden" value={lang} readOnly />
          <div className="py-3 pb-2">
            <Button
              htmlType="submit"
              type="primary"
              block
              size="large"
              formAction={signInUserAction}
            >
              Sign In
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
