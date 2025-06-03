import {
  Flex,
  Heading,
  Image,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Section from "../Section";
import { CircleCheckBig, Users } from "lucide-react";

export default function WhyPubliCarePsico() {
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
        <Flex
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          flex={1}
          flexDir="column"
          gap={4}
          maxW="1000px"
        >
          <Flex alignItems="center" gap={4}>
            <Users size={40} />
            <Heading fontSize={{ base: 20, md: 40 }}>
              Por que fazer parte da PubliCare?
            </Heading>
          </Flex>
          <UnorderedList
            fontSize={{ base: 16, md: 20 }}
            styleType="none"
            spacing={4}
          >
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Acesso a novos pacientes do mercado criativo, que buscam
              acolhimento especializado.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Divulgação do seu perfil em uma plataforma voltada 100% para saúde
              mental.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Atuação flexível: online, presencial ou híbrida, como preferir.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Pertencer a um movimento que valoriza o cuidado emocional no
              trabalho.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Proposta especial de entrada: primeira sessão gratuita. Uma
              oportunidade para o paciente conhecer seu trabalho, sem barreiras.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Image src="/mockups/1.png" alt="Publicare" maxW="300px" />
      </Flex>
    </Section>
  );
}
