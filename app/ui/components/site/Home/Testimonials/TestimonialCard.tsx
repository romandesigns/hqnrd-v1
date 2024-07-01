import Image from "next/image";

const reviewRatings = [
  { rating: 5.0, label: "Rooms" },
  { rating: 5.0, label: "Service" },
  { rating: 4.0, label: "Location" },
];

export function ReviewCard() {
  return (
    <div className="relative grid w-full grid-cols-[auto_1fr] grid-rows-[1fr_auto] rounded-md bg-white p-1 py-4">
      <figure className="absolute -left-1 -top-1 h-24 w-24 overflow-hidden rounded-md bg-slate-500 shadow-[7px_8px_12px_-4px_rgba(0,0,0,0.3)]">
        <Image
          width={200}
          height={200}
          src="https://lh3.googleusercontent.com/a-/ALV-UjWTQKUK5Puh5pM3IxLxG7s54oC5cffMZQNtZUNVAPqU2Z0=w200-h200"
          alt="reviwer avatar"
        />
      </figure>
      <div />
      <div className="pl-8 text-left text-sm">
        <h4 className="my-2 font-black">Roman Feliz</h4>
        <p className="mt-2 text-xs font-medium leading-5 text-neutral-600">
          Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit.
          dolor sit amet consectetur.
        </p>
      </div>
      <span className="px-4 text-2xl font-bold">4/5</span>
      <div className="flex items-center justify-start p-1 pl-8 pt-2">
        <div className="space-x-1 text-left text-[0.75rem] text-neutral-800">
          {reviewRatings.map((rating, index) => (
            <span
              key={index}
              className="rounded-md bg-primary-100 p-1 px-2 font-medium"
            >
              {rating.label}
              {": "}
              <span className="py-1 font-bold text-neutral-800">
                {rating.rating}
              </span>
            </span>
          ))}
        </div>
        <div className="flex items-center"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[url('/assets/general/quotes-icon.svg')] bg-[length:200px_200px] bg-[right_bottom_-3rem] bg-no-repeat opacity-10" />
    </div>
  );
}
