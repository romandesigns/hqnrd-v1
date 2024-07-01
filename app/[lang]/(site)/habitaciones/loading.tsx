import { Loader } from "@/app/ui/features";

export default function Loading() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[10] flex items-center justify-center bg-[#fcfcfd]">
      <Loader />
    </div>
  );
}
