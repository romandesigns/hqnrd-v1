import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";

type LinksTytpes = {
  path: string;
  label: string;
}[];

export function TopMenuContent({
  lang,
  menuLinks,
}: {
  lang: Locale;
  menuLinks: LinksTytpes;
}) {
  return (
    <ul className="flex items-center justify-start gap-2">
      {menuLinks.map((link) => (
        <Button size="large" type="link" key={`${link.path}`}>
          <Link className="underline" href={`/${lang}${link.path}`}>
            {link.label}
          </Link>
        </Button>
      ))}
    </ul>
  );
}
