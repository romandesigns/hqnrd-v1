"use client";

export function FileInput({
  image,
  imgDir,
  onChange,
  name,
}: {
  image: string;
  imgDir: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) {
  return (
    <label
      htmlFor={name}
      className="relative inline-block h-64 cursor-pointer overflow-hidden rounded-md border border-red-500/50 bg-red-500/10 hover:bg-red-500/20"
    >
      <input
        type="file"
        name={name}
        id={name}
        className="hidden"
        onChange={onChange}
      />
      {image && imgDir.includes(name) ? (
        <img
          src={image}
          alt="og-img"
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        />
      ) : null}
    </label>
  );
}
