import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FaqAccordion({
  data,
}: {
  data: { title: string; content: string }[]
}) {
  return (
    <Accordion type="single" collapsible>
      {data.map(({ title, content }, key) => (
        <AccordionItem value={title} key={key} className="px-8 py-7">
          <AccordionTrigger className="text-base font-normal tracking-[0.005rem] text-black">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-normal text-sm text-neutral-500">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
