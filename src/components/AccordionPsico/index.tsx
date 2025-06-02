import { AccordionIcon } from "@chakra-ui/react";

export default function AccordionPsico() {
  return (
    <AccordionIcon
      sx={{
        color: "var(--rosa-escuro) !important",
        "& path": {
          stroke: "var(--rosa-escuro) !important",
          fill: "var(--rosa-escuro) !important",
        },
      }}
    />
  );
}
