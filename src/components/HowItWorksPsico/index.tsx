import {
  Flex,
  Heading,
  Image,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Users } from "lucide-react";
import Section from "../Section";

export default function HowItWorksPsico() {
  return (
    <Section color="var(--roxo-escuro)">
      <Flex
        flexDir={{ base: "column-reverse", md: "row-reverse" }}
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
          <OrderedList fontSize={{ base: 16, md: 20 }} spacing={4}>
            <ListItem color="var(--roxo-escuro)">
              Você se cadastra no nosso formulário de interesse.
            </ListItem>
            <ListItem color="var(--roxo-escuro)">
              Nossa equipe avalia o perfil e entra em contato.
            </ListItem>
            <ListItem color="var(--roxo-escuro)">
              Seu perfil será divulgado no catálogo de psicólogos da PubliCare.
            </ListItem>
            <ListItem color="var(--roxo-escuro)">
              Você recebe agendamentos de acordo com seu tipo de atendimento e
              disponibilidade.
            </ListItem>
          </OrderedList>
        </Flex>
        <Image
          src="https://placehold.co/500x500"
          alt="Publicare"
          width={{ base: "100%", md: "500px" }}
          height={{ base: "auto", md: "500px" }}
        />
      </Flex>
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
              Quem pode se cadastrar?
            </Heading>
          </Flex>
          <UnorderedList fontSize={{ base: 16, md: 20 }} spacing={4}>
            <ListItem color="var(--roxo-escuro)">
              Psicólogos(as) com CRP ativo.
            </ListItem>
            <ListItem color="var(--roxo-escuro)">
              Especializados ou com interesse em atuar com saúde mental ligada
              ao ambiente de trabalho (burnout, ansiedade, estresse,
              autoconhecimento).
            </ListItem>
            <ListItem color="var(--roxo-escuro)">
              Atendimento online, presencial ou ambos.
            </ListItem>
          </UnorderedList>
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
