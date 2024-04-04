import Image from "next/image";

export function ReviewCard() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] relative bg-white p-1 rounded-md w-full">
      <figure className="h-24 w-24 bg-slate-500 absolute -left-3 rounded-md shadow-[7px_8px_12px_-4px_rgba(0,0,0,0.3)] overflow-hidden">
        <Image
          width={200}
          height={200}
          src="https://lh3.googleusercontent.com/a-/ALV-UjWTQKUK5Puh5pM3IxLxG7s54oC5cffMZQNtZUNVAPqU2Z0=w200-h200"
          alt="reviwer avatar"
        />
      </figure>
      <div />
      <div className="text-left text-sm pl-6">
        <h4 className="font-black my-2">Roman Feliz</h4>
        <p className="text-xs mt-2 leading-5 font-medium text-neutral-600">
          Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit.
          dolor sit amet consectetur.
        </p>
      </div>
      <span className="text-2xl p-1 font-bold pl-4 pt-2">4/5</span>
      <div className="p-1 pl-5 pt-2 flex items-center justify-start">
        <div className="text-xs text-left text-secondary-800 space-x-4">
          <span>
            Rooms <span className="font-bold py-1 text-neutral-800">5.0</span>
          </span>
          <span>
            Service <span className="font-bold text-neutral-800">5.0</span>
          </span>
          <span>
            Location <span className="font-bold text-neutral-800">4.0</span>
          </span>
        </div>
        <div className="flex items-center"></div>
      </div>
      <div className="bg-[url('/assets/general/quotes-icon.svg')] bg-no-repeat bg-[right_bottom_-3rem] bg-[length:200px_200px] absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10" />
    </div>
  );
}
