import Image from "next/image";

export function ReviewCard() {
  return (
    <div className="relative grid w-full grid-cols-[auto_1fr] grid-rows-[1fr_auto] rounded-md bg-white p-1">
      <figure className="absolute -left-3 h-24 w-24 overflow-hidden rounded-md bg-slate-500 shadow-[7px_8px_12px_-4px_rgba(0,0,0,0.3)]">
        <Image
          width={200}
          height={200}
          src="https://lh3.googleusercontent.com/a-/ALV-UjWTQKUK5Puh5pM3IxLxG7s54oC5cffMZQNtZUNVAPqU2Z0=w200-h200"
          alt="reviwer avatar"
        />
      </figure>
      <div />
      <div className="pl-6 text-left text-sm">
        <h4 className="my-2 font-black">Roman Feliz</h4>
        <p className="mt-2 text-xs font-medium leading-5 text-neutral-600">
          Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit.
          dolor sit amet consectetur.
        </p>
      </div>
      <span className="p-1 pl-4 pt-2 text-2xl font-bold">4/5</span>
      <div className="flex items-center justify-start p-1 pl-5 pt-2">
        <div className="space-x-4 text-left text-xs text-neutral-800">
          <span className="font-semibold">
            Rooms <span className="py-1 font-bold text-neutral-800">5.0</span>
          </span>
          <span className="font-semibold">
            Service <span className="font-bold text-neutral-800">5.0</span>
          </span>
          <span className="font-semibold">
            Location <span className="font-bold text-neutral-800">4.0</span>
          </span>
        </div>
        <div className="flex items-center"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[url('/assets/general/quotes-icon.svg')] bg-[length:200px_200px] bg-[right_bottom_-3rem] bg-no-repeat opacity-10" />
    </div>
  );
}
