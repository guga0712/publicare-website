import { Flex, Heading, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import Images from "../Images";

export default function HeroPsico() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      overflow="hidden"
      height="100%"
      width="100%"
      align="center"
      px={{
        base: 6,
        md: `var(--margin-medium)`,
        lg: `var(--margin-large)`,
        xl: `var(--margin-xlarge)`,
      }}
      py={20}
      gap={{ base: 20, md: 10 }}
    >
      <Flex flexDir="column" gap={8} flex={1}>
        <Heading
          fontSize="clamp(1.5rem, 3vw, 4.5rem)"
          fontWeight="bold"
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
        >
          <TypeAnimation
            sequence={[
              "Transformando o\nmercado da comunicação,\num cuidado de cada vez.",
            ]}
            speed={50}
            wrapper="span"
            style={{
              display: "block",
              minHeight: "clamp(6rem, 11vw, 13.5rem)",
              whiteSpace: "pre",
            }}
            cursor={false}
          />
        </Heading>

        <Text
          fontSize="clamp(1.2rem, 2vw, 1.5rem)"
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
          wordBreak="break-word"
        >
          A PubliCare nasceu para ser um ponto de apoio real para profissionais
          da publicidade e do marketing. Atuamos em um mercado intenso, cheio de
          prazos apertados e alta pressão, onde o bem-estar muitas vezes é
          deixado de lado.
        </Text>
        <Text
          fontSize="clamp(1.2rem, 2vw, 1.5rem)"
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
          wordBreak="break-word"
        >
          Queremos fazer diferente. Queremos cuidar de quem vive da
          criatividade. E para isso, contamos com psicólogos comprometidos como
          você.
        </Text>
      </Flex>
      <Images src="/brain.png" />
    </Flex>
  );
}
