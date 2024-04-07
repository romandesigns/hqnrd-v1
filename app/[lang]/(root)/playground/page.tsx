import React, { useMemo } from "react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20">
        <div className="shadow-2xl shadow-gray-50 dark:shadow-none border border-violet-50 dark:border-blue-850 bg-white dark:bg-blue-750 rounded-md relative">
          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-8">
            <p className="font-bold mb-2 text-violet-500 dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
              10M+
            </p>
            <p className="mb-0 leading-5 text-sm lg:text-base">
              Students taught
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
