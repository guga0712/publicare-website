import { Flex, Heading } from "@chakra-ui/react";
import Section from "../Section";
import PsychologistCard from "../PsychologistCard";
export default function RateUs() {
  return (
    <Section color="#fff">
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
        gap={{ base: 12, md: 12 }}
        justifyContent="center"
      >
        <Heading color="var(--rosa-escuro)">
          Agende uma consulta com um psicólogo da PubliCare
        </Heading>
        <PsychologistCard
          name="Diego"
          specialty="Psicoterapia"
          image="/diego.jpg"
          price={100}
          type="Online"
        />
      </Flex>
    </Section>
  );
}
