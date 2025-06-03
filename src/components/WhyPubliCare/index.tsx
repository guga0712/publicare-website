import { Flex, Heading } from "@chakra-ui/react";
import Section from "../Section";
import CardWhy from "../CardWhy";
import Images from "../Images";

export default function WhyPubliCare() {
  return (
    <Section color="var(--ciano)">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        overflow="hidden"
        height={{ base: "auto", md: "70vh" }}
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
        <Flex
          borderRadius="2xl"
          flex={1}
          flexDir="column"
          gap={4}
          maxW="1000px"
          alignItems="center"
        >
          <Heading fontSize={{ base: 20, md: 40 }} textAlign="center">
            Por que escolher a PubliCare?
          </Heading>
          {/* <UnorderedList
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
          </UnorderedList> */}
          <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
            <CardWhy
              delay={400}
              icon="Users"
              description="Psicólogos que conhecem os desafios da publicidade."
            />
            <CardWhy
              delay={800}
              icon="Share2"
              description="Veja os perfis, conheça as especialidades e escolha quem faz
              sentido para você."
            />
            <CardWhy
              delay={1200}
              icon="Laptop"
              description="Atendimento online, acessível e prático!"
            />
          </Flex>
        </Flex>
        <Images src="/hands.png" />
      </Flex>
    </Section>
  );
}
