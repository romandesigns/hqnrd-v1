import { twMerge } from "tailwind-merge";
import { HiUserGroup } from "../../icons";

export const MaxGuestQntyBadge = ({
  qnty,
  className,
}: {
  qnty: number;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `text-charcoal absolute bottom-1 right-2 z-[3] flex items-center justify-center space-x-1 text-[0.6rem] md:text-[.8rem] ${className}`,
      )}
    >
      <span>
        <HiUserGroup />
      </span>
      <span>{qnty} Max</span>
    </div>
  );
};
