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
          colorPrimary: "#3c8cc2",
          fontFamily: "Poppins",
        },
        components: {
          DatePicker: {
            borderRadius: 7,
          },
          Input: {
            paddingBlock: 5,
            activeShadow: "0 0 0 3px rgba(5, 145, 255, 0.15)",
          },
        },
        cssVar: true,
        hashed: false,
      }}
      locale={lang === "de" ? deDE : lang === "en" ? enUS : esES}
    >
      {children}
    </ConfigProvider>
  );
}
