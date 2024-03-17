"use client";
import React from "react";
import { ConfigProvider } from "antd";
import deDE from "antd/locale/de_DE";
import enUS from "antd/locale/en_US";
import esES from "antd/locale/es_ES";
import { Locale } from "@/i18n-config";

export default function AntConfigProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff0000",
        },
      }}
      locale={lang === "de" ? deDE : lang === "en" ? enUS : esES}
    >
      {children}
    </ConfigProvider>
  );
}
