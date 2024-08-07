import { AccordionTrigger } from "@/components/ui/accordion";

interface ContentTriggerButtonProps {
  title: string;
  description: string;
}

const ContentTriggerButton = ({
  description,
  title,
}: ContentTriggerButtonProps) => {

  return (
    <AccordionTrigger className="hover:no-underline">
      <div className="flex flex-col items-start">
        <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-400">{title}</span>
        <p className="text-black/70 line-clamp-1 text-start">
          {description}
        </p>
      </div>
    </AccordionTrigger>
  );
};

export default ContentTriggerButton;
