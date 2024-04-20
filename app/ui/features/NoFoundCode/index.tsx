import Image from "next/image";

export function NotFoundCode() {
  return (
    <div className="flex">
      <Image
        src="/assets/general/four.svg"
        width={100}
        height={100}
        alt="404 error code - four digit image"
      />
      <Image
        src="/assets/general/zero.svg"
        width={100}
        height={100}
        alt="404 error code - zero digit image"
      />
      <Image
        src="/assets/general/four.svg"
        width={100}
        height={100}
        alt="404 error code - four digit image"
      />
    </div>
  );
}
