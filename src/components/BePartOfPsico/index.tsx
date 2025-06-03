import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Section from "../Section";

export default function BePartOfPsico() {
  return (
    <Section color="var(--rosa-escuro)">
      <Flex
        flexDir={{ base: "column" }}
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
        py={{ base: 36, md: 12 }}
        gap={{ base: 8, md: 4 }}
        justifyContent="center"
        textAlign="center"
      >
        <Heading fontSize={{ base: 42, md: 72 }}>
          Faça parte da PubliCare!
        </Heading>
        <Text fontSize={20}>
          Se você também acredita que criatividade e bem-estar podem, e devem
          caminhar juntos, venha com a gente.
        </Text>
        <Button
          backgroundColor="white"
          color="var(--rosa-escuro)"
          borderRadius="full"
          fontSize={{ base: 16, md: 25 }}
          fontWeight="bold"
          paddingX={{ base: 8, md: 12 }}
          paddingY={{ base: 6, md: 8 }}
          _hover={{ backgroundColor: "none" }}
          _active={{ backgroundColor: "none" }}
          as="a"
          href="https://forms.gle/WGnNUyPi1cvhz4M17"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUERO FAZER PARTE DA PUBLICARE
        </Button>
      </Flex>
    </Section>
  );
}
