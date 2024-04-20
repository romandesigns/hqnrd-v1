"use client";
import { Locale } from "@/i18n-config";
import { ConfigProvider, theme } from "antd";
import deDE from "antd/locale/de_DE";
import enUS from "antd/locale/en_US";
import esES from "antd/locale/es_ES";
import React from "react";

export default function AntConfigProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <ConfigProvider
      csp={{ nonce: "YourNonceCode" }}
      theme={{
        algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
        token: {
          fontFamily: "Poppins",
          borderRadius: 6,
          colorBgContainer: "#ffffff",
          colorPrimary: "#1a73b2",
          colorInfo: "#1a73b2",
          colorSuccess: "#3eb21a",
          colorWarning: "#b2851a",
          colorError: "#b21a1a",
          colorLinkActive: "#1a73b2",
          colorLinkHover: "#6097c0",
          colorTextBase: "#181818",
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
