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
        <Flex
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderRadius="2xl"
          p={10}
          flex={1}
          flexDir="column"
          gap={4}
          maxW="1000px"
        >
          <Flex alignItems="center" gap={4}>
            <Users size={40} />
            <Heading fontSize={{ base: 20, md: 40 }}>
              Por que escolher a PubliCare?
            </Heading>
          </Flex>
          <UnorderedList
            fontSize={{ base: 16, md: 20 }}
            styleType="none"
            spacing={4}
          >
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Psicólogos que conhecem os desafios da publicidade.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Veja os perfis, conheça as especialidades e escolha quem faz
              sentido para você.
            </ListItem>
            <ListItem>
              <ListIcon as={CircleCheckBig} />
              Atendimento online, acessível e prático!
            </ListItem>
          </UnorderedList>
        </Flex>
        <Image src="/mockups/1.png" alt="Publicare" maxW="300px" />
      </Flex>
    </Section>
  );
}
