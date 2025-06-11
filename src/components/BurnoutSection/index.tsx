import { Flex, Heading, Text } from "@chakra-ui/react";
import Section from "../Section";

import PsychosComponent from "../PsychosComponent";

export default function BurnoutSection() {
  return (
    <Section color="var(--rosa-escuro)">
      <Flex
        flexDir={{ base: "column" }}
        overflow="hidden"
        height="auto"
        width="100%"
        align="center"
        px={{
          base: 6,
          md: `var(--margin-medium)`,
          lg: `var(--margin-large)`,
          xl: `var(--margin-xlarge)`,
        }}
        py={{ base: 36, md: 12 }}
        gap={{ base: 8, md: 8 }}
        justifyContent="center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Flex
          flexDir="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Heading fontSize={{ base: 42, md: 72 }}>
            Burnout não é briefing.
          </Heading>
          <Text fontSize={20}>
            Agende uma consulta com um psicólogo da PubliCare
          </Text>
        </Flex>

        <PsychosComponent />

        <Text fontSize={20}>
          Cuide da sua mente com quem entende os desafios da área.
        </Text>
      </Flex>
    </Section>
  );
}
