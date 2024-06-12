"use client";

import React from "react";
import { Button } from "antd";
import { HiMenuAlt1 } from "../../icons";

export const FloatingBtn = () => {
  return (
    <button className="absolute bottom-20 right-6 rounded-md border border-neutral-200 bg-white p-2 shadow-xl md:hidden">
      <HiMenuAlt1 size={20} />
    </button>
  );
};
