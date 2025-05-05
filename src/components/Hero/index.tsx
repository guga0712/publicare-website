import { Flex, Heading, Image, Text } from "@chakra-ui/react";

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
          <Text as="span">a lidar com os desafios do dia a dia</Text>
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
