import Image from "next/image";
import { Header } from "../../../layout/Header";
import { Select } from "../HeaderContent/Select";

export const HeaderComponent = ({ billboards }: { billboards: string[] }) => {
  const randomImage = billboards[Math.floor(Math.random() * billboards.length)];
  return (
    <Header className="relative z-[2] flex h-72 items-center justify-center px-4 pt-[3.7rem] lg:h-[30rem]">
      <div className="absolute left-0 right-0 top-0 z-[1] h-full w-full backdrop-blur-lg backdrop-filter" />
      <Select />
      <Image
        src={randomImage}
        height={1080}
        width={1920}
        alt="hero Image"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
      />
    </Header>
  );
};
