import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Section from "../Section";

export default function BurnoutSection() {
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
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Heading fontSize={{ base: 42, md: 72 }}>
          Burnout não é briefing.
        </Heading>
        <Text fontSize={20}>
          Cuide da sua mente com quem entende os desafios da área.
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
        >
          AGENDE SUA CONSULTA AGORA
        </Button>
      </Flex>
    </Section>
  );
}
