"use client";
import React from "react";
import { ConfigProvider, theme } from "antd";
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
        algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
        token: {
          colorPrimary: "#1a73b2",
          fontFamily: "Poppins",
        },
      }}
      locale={lang === "de" ? deDE : lang === "en" ? enUS : esES}
    >
      {children}
    </ConfigProvider>
  );
}
