import { Locale } from "@/i18n-config";
import { Button, Input } from "antd";
import Link from "next/link";

export default async function NewCategoryForm({
  lang,
}: Readonly<{
  lang: Locale;
}>) {
  return (
    <article
      className={
        "flex h-full w-full flex-col items-center justify-center gap-4 rounded-md"
      }
    >
      <form className="flex">
        <input
          type="text"
          name="lang"
          className="hidden"
          value={lang}
          readOnly
        />
        <Input
          type="text"
          name="title"
          placeholder="Enter new category"
          size="large"
          className="!rounded-br-none !rounded-tr-none"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="!rounded-bl-none !rounded-tl-none"
        >
          Add Category
        </Button>
      </form>
      <Link
        href={`/${lang}/portal/habitaciones/crear?skip_category=true`}
        className="text-primary-500 underline"
      >
        Skip
      </Link>
    </article>
  );
}
