import { AccordionTrigger } from "@/components/ui/accordion"

interface ContentTriggerButtonProps {
  title: string
  description: string
}

const ContentTriggerButton = ({
  description,
  title,
}: ContentTriggerButtonProps) => {
  return (
    <AccordionTrigger className="hover:no-underline">
      <div className="flex flex-col items-start">
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent">
          {title}
        </span>
        <p className="line-clamp-1 text-start text-black/70">{description}</p>
      </div>
    </AccordionTrigger>
  )
}

export default ContentTriggerButton
