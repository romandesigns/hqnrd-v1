"use client";
import React from "react";
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";

const px2rem = px2remTransformer({
  rootValue: 32,
});

export function FontUnitProvider({ children }: { children: React.ReactNode }) {
  return <StyleProvider transformers={[px2rem]}>{children}</StyleProvider>;
}
