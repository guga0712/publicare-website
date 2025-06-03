import { Flex, Heading } from "@chakra-ui/react";
import Section from "../Section";
import CardWhy from "../CardWhy";

export default function WhyPubliCarePsico() {
  return (
    <Section color="var(--ciano)">
      <Flex
        flexDir="column"
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
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Heading as="h2" size="2xl" textAlign="center">
          Por que escolher o PubliCare?
        </Heading>
        <Flex
          gap={4}
          flexDir={{ base: "column", md: "row" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CardWhy
            delay={400}
            icon="Users"
            description="Acesso a novos pacientes do mercado criativo, que buscam acolhimento especializado."
          />
          <CardWhy
            delay={600}
            icon="Share2"
            description="Divulgação do seu perfil em uma plataforma voltada 100% para saúde mental."
          />
          <CardWhy
            delay={800}
            icon="Laptop"
            description="Atuação flexível: online, presencial ou híbrida, como preferir."
          />
          <CardWhy
            delay={1000}
            icon="Ambulance"
            description=" Pertencer a um movimento que valoriza o cuidado emocional no trabalho."
          />
          <CardWhy
            delay={1200}
            icon="CircleCheckBig"
            description="Proposta especial de entrada: primeira sessão gratuita. Uma oportunidade para o paciente conhecer seu trabalho, sem barreiras."
          />
        </Flex>
      </Flex>
    </Section>
  );
}
