import { Flex, Heading, Text } from "@chakra-ui/react";
import Images from "../Images";

export default function Hero() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      overflow="hidden"
      height={{ base: "auto", md: "80vh" }}
      width="100%"
      align="center"
      px={{
        base: 6,
        md: `var(--margin-medium)`,
        lg: `var(--margin-large)`,
        xl: `var(--margin-xlarge)`,
      }}
      py={20}
      gap={{ base: 20, md: 0 }}
    >
      <Flex flexDir="column" gap={8} flex={1}>
        <Heading
          fontSize="clamp(2rem, 3vw, 4.5rem)"
          fontWeight="bold"
          whiteSpace={{ base: "pre-wrap", md: "pre" }}
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
        >
          {`Bem-vindo ao seu \nponto de equilíbrio.`}
        </Heading>

        <Text
          fontSize="clamp(1.2rem, 2vw, 2rem)"
          whiteSpace={{ base: "pre-wrap", md: "pre" }}
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text as="span">Conecte-se a psicólogos que já</Text>
          <Text as="span" fontWeight="bold" display="block" my={2}>
            ajudaram publicitários como você
          </Text>
          <Text as="span">a lidar com os desafios do dia a dia.</Text>
        </Text>
      </Flex>
      <Images src="/brain.png" />
    </Flex>
  );
}
