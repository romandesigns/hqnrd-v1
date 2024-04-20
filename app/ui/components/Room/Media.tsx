"use client";
import React from "react";
import { Image } from "antd";

export function Media() {
  return (
    <>
      <div>
        <h3 className="py-4 font-bold">Room Diagram</h3>
        <div className="overflow-hidden rounded-md p-4">
          <Image src="/assets/home/diagram/01.png" alt="Image diagram" />
        </div>
      </div>
      <div>
        <h3 className="py-4 font-bold">Walkaround</h3>
        <div className="max-w-lg overflow-hidden rounded-md p-4">
          <video
            src="https://eexwpgqzilclwdjimovo.supabase.co/storage/v1/object/public/hqnrd/rooms/201/video/20230330_115323.mp4?t=2024-04-19T17%3A39%3A20.184Z"
            controls
            muted
            className="rounded-md"
          />
        </div>
      </div>
    </>
  );
}
