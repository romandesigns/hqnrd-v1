'use client';

import { Modal } from "@/app/ui/features";
import Image from "next/image";
import React from "react";

export function Avatar() {
  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <>
        <button className="hoveredUI" onClick={() => setIsOpen(true)}>
            <Image
                src="/assets/general/male-user-placeholder.png"
                alt="user avatar"
                className="aspect-square rounded-md opacity-[0.20]"
                width={45}
                height={45}
            />
        </button>
        <Modal  title="Upload Avatar" open={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <p>Hello world</p>
        </Modal>
     </>
  );
}