import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import ContentTriggerButton from "./content-trigger-button";
import ScanDestination from "./scan-destination";

interface QrOptionsProps {}

const QrOptions = ({}: QrOptionsProps) => {
  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <ContentTriggerButton
            title="Scan destination"
            description="Where should your QR code scan to?"
          />

          <AccordionContent>
           <ScanDestination />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default QrOptions;
