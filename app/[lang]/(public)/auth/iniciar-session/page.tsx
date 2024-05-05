import { Content } from "@/app/ui/components/auth/signIn/Content";
import { Locale } from "@/i18n-config";

export default function Page({
  params: { lang },
  searchParams,
}: Readonly<{
  params: { lang: Locale };
  searchParams: { success: string; error: string };
}>) {
  return (
    <Content
      lang={lang}
      success={searchParams.success}
      errorMessage={searchParams.error}
    />
  );
}
