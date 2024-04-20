export function PageHeading({
  unit,
  title,
  metaDescription,
}: {
  unit: string;
  title: string;
  metaDescription: string;
}) {
  return (
    <div className="py-10 text-center sm:pt-0">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="relative !m-0 mt-4 inline-flex items-center justify-center rounded-full bg-neutral-800 p-1 px-8 text-xs font-bold text-white">
          <p className="font-semibold">Unit #{unit}</p>
        </div>
        <p className="text-xs lg:text-sm">{metaDescription}</p>
      </div>
    </div>
  );
}
