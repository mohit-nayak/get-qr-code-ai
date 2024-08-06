import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import ContentTriggerButton from "./content-trigger-button";
import ScanDestination from "./scan-destination";
import DesignOptions from "./design-option";

interface QrOptionsProps {}

const QrOptions = ({}: QrOptionsProps) => {
  return (
    <section>
      <Accordion defaultValue="item-2" type="single" collapsible>
        <AccordionItem value="item-1">
          <ContentTriggerButton
            title="Scan destination"
            description="Where should your QR code scan to?"
          />

          <AccordionContent>
           <ScanDestination />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" >
          <ContentTriggerButton
            title="Design your code (optional)"
            description="Enhance your code with custom design to maximize scans"
          />

          <AccordionContent>
           <DesignOptions />
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  );
};

export default QrOptions;
