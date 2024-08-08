"use client"

import { IconProps } from "@/components/shared/icons";
import type { destinationEnum } from "@/constants/destination";
import { cn } from "@/lib/utils";

interface SelectCardProps {
  data: {
    id: number;
    Icon: (props: IconProps) => JSX.Element;
    label: string;
    value: destinationEnum;
  };
  currentIndex: number;
  handleToogleCard: (value: number) => void;
}

const SelectCard = ({
  data,
  currentIndex,
  handleToogleCard,
}: SelectCardProps) => {

  const { Icon, id, label, value } = data;

  const isValid = !!(currentIndex === value)

  return (
    <div
      key={id}
      onClick={() => handleToogleCard(value)}
      className={cn(
        "flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md",
        isValid ? "bg-gradient-to-r from-violet-500 to-fuchsia-400 font-bold text-white" : "bg-zinc-100 hover:bg-zinc-100/80 font-medium transition-all duration-200",
      )}
    >
      <Icon className="size-4" />
      <span className="text-xs sm:text-sm line-clamp-1">{label}</span>
    </div>
  );
};

export default SelectCard;
