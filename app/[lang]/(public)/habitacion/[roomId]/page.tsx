import { Locale } from "@/i18n-config";
import React from "react";

const Habitacion = ({
  params: { lang, roomId },
}: {
  params: { lang: Locale; roomId: string };
}) => {
  console.table({ lang, roomId });
  return <div>{`Room # ${roomId}`}</div>;
};

export default Habitacion;
