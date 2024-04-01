import Image from "next/image";

export function WeatherWidget() {
  return (
    <div className="hidden text-black relative md:block z-[3]">
      <div className="flex space-x-6">
        <span>
          <p className="text-xs font-regular">Today</p>
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
          <p className="text-xs font-regular">Tomorrow</p>
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
          <p className="text-xs font-regular">The Day After</p>
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
