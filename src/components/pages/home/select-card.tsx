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

  return (
    <div
      key={id}
      onClick={() => handleToogleCard(value)}
      className={cn(
        "flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 transition-all duration-200",
        currentIndex === value ? "border-black" : "border-zinc-300 shadow-sm hover:shadow-black/30",
      )}
    >
      <Icon className="size-6" />
      <span className="font-semibold text-xs sm:text-sm line-clamp-1">{label}</span>
    </div>
  );
};

export default SelectCard;
