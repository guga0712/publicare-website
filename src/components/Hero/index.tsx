import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      overflow="hidden"
      height="70vh"
      width="100%"
      align="center"
      px={{ base: 6, md: 0 }}
      py={12}
      gap={{ base: 10, md: 0 }}
    >
      <Flex flexDir="column" gap={8} flex={1}>
        <Heading
          fontSize="clamp(2.5rem, 4vw, 5rem)"
          fontWeight="bold"
          whiteSpace="pre"
          lineHeight="1.2"
        >
          {`Bem-vindo ao seu\nponto de equilíbrio.`}
        </Heading>

        <Text
          fontSize="clamp(1.2rem, 2.5vw, 2rem)"
          whiteSpace="pre-line"
          lineHeight="1.6"
          textAlign={{ base: "center", md: "left" }}
        >
          {`Conecte-se a psicólogos que já\n`}
          <Text as="span" fontWeight="bold" display="inline">
            ajudaram publicitários como você
          </Text>
          {`\na lidar com os desafios do dia a dia`}
        </Text>
      </Flex>

      <Image
        src="/mao-hero.png"
        alt="hero"
        width={{ base: "80%", md: "50%" }}
        maxW="1000px"
        flex={1}
      />
    </Flex>
  );
}
