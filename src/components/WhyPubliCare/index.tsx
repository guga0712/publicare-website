import { Flex, Image } from "@chakra-ui/react";
import Section from "../Section";

export default function WhyPubliCare() {
  return (
    <Section color="var(--ciano)">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        overflow="hidden"
        height={{ base: "auto", md: "60vh" }}
        width="100%"
        align="center"
        px={{
          base: 6,
          md: `var(--margin-medium)`,
          lg: `var(--margin-large)`,
          xl: `var(--margin-xlarge)`,
        }}
        py={12}
        gap={{ base: 10, md: 20 }}
        justifyContent="space-between"
      >
        <Flex></Flex>
        <Image src="https://placehold.co/500x500" alt="Publicare" />
      </Flex>
    </Section>
  );
}
