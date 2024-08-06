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
        <span className="text-lg">{title}</span>
        <p className="text-zinc-600 line-clamp-1 text-start">
          {description}
        </p>
      </div>
    </AccordionTrigger>
  );
};

export default ContentTriggerButton;
