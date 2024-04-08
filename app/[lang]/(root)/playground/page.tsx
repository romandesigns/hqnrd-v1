import React, { useMemo } from "react";

export default function Page() {
  return (
    <div>
      <div className="mx-auto my-20 grid grid-cols-2 justify-center gap-4 md:grid-cols-4">
        <div className="dark:border-blue-850 dark:bg-blue-750 relative rounded-md border border-violet-50 bg-white shadow-2xl shadow-gray-50 dark:shadow-none">
          <div className="flex -translate-y-[1px] justify-center">
            <div className="w-3/4">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500  to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <p className="dark:text-violet-60 mb-2 text-2xl font-bold text-violet-500 md:text-3xl lg:text-4xl">
              10M+
            </p>
            <p className="mb-0 text-sm leading-5 lg:text-base">
              Students taught
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
