import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Users } from "lucide-react";
import Section from "../Section";

export default function HowItWorks() {
  return (
    <Section color="var(--roxo-escuro)">
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
        <Flex
          backgroundColor="white"
          borderRadius="2xl"
          p={10}
          flex={1}
          flexDir="column"
          gap={4}
          maxW="1000px"
        >
          <Flex alignItems="center" gap={4}>
            <Users size={40} color="var(--roxo-escuro)" />
            <Heading fontSize={{ base: 20, md: 40 }} color="var(--roxo-escuro)">
              Como funciona?
            </Heading>
          </Flex>
          <Text color="var(--roxo-escuro)">
            A{" "}
            <Text as="strong" color="var(--roxo-escuro)">
              PubliCare
            </Text>{" "}
            é uma plataforma feita para você, publicitário, que busca um suporte
            psicológico com quem realmente entende os desafios da área. Nós
            conectamos você a psicólogos especializados, que já ajudaram outros
            profissionais do mercado criativo a encontrar{" "}
            <Text as="strong" color="var(--roxo-escuro)">
              equilíbrio entre produtividade e bem-estar.
            </Text>
          </Text>
        </Flex>
        <Image
          src="https://placehold.co/500x500"
          alt="Publicare"
          width={{ base: "100%", md: "500px" }}
          height={{ base: "auto", md: "500px" }}
        />
      </Flex>
    </Section>
  );
}
