import Image from "next/image";

export function WeatherWidget() {
  return (
    <div className="relative z-[3] hidden text-black sm:block">
      <div className="flex space-x-6">
        <span>
          <p className="font-regular text-xs">Today</p>
          <span className="flex items-center justify-center">
            <Image
              width={12}
              height={12}
              src="/assets/icons/weather/drop-33486.svg"
              alt="drop icon"
            />
          </span>
        </span>
        <span>
          <p className="font-regular text-xs">Tomorrow</p>
          <span className="flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src="/assets/icons/weather/brightness-33474.svg"
              alt="drop icon"
            />
          </span>
        </span>
        <span>
          <p className="font-regular text-xs">The Day After</p>
          <span className="flex items-center justify-center">
            <Image
              width={22}
              height={22}
              src="/assets/icons/weather/cloud-33472.svg"
              alt="drop icon"
            />
          </span>
        </span>
      </div>
    </div>
  );
}
