import { Button, Flex, Text } from "@chakra-ui/react";
import Section from "../Section";
import { StarIcon } from "lucide-react";

export default function RateUs() {
  return (
    <Section color="#fff">
      <Flex
        flexDir={{ base: "column" }}
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
        py={{ base: 36, md: 12 }}
        gap={{ base: 12, md: 12 }}
        justifyContent="center"
      >
        <Text
          fontSize={{ base: 32, md: 42 }}
          color="var(--rosa-escuro)"
          lineHeight={1}
          textAlign="center"
        >
          Nos avalie e concorra <br /> a{" "}
          <Text as="strong" color="var(--rosa-escuro)">
            um Vale Bem-Estar <br />
          </Text>
          no{" "}
          <Text as="strong" color="var(--rosa-escuro)">
            Buddha SPA!
          </Text>
        </Text>

        <Button
          backgroundColor="var(--rosa-escuro)"
          color="white"
          borderRadius="full"
          fontSize={{ base: 20, md: 25 }}
          fontWeight="bold"
          paddingX={12}
          paddingY={8}
          _hover={{ backgroundColor: "none" }}
          _active={{ backgroundColor: "none" }}
        >
          AVALIE AGORA
        </Button>
        <Flex gap={2}>
          <StarIcon
            color="var(--rosa-escuro)"
            fill="var(--rosa-escuro)"
            size={32}
          />
          <StarIcon
            color="var(--rosa-escuro)"
            fill="var(--rosa-escuro)"
            size={32}
          />
          <StarIcon
            color="var(--rosa-escuro)"
            fill="var(--rosa-escuro)"
            size={32}
          />
          <StarIcon
            color="var(--rosa-escuro)"
            fill="var(--rosa-escuro)"
            size={32}
          />
          <StarIcon
            color="var(--rosa-escuro)"
            fill="var(--rosa-escuro)"
            size={32}
          />
        </Flex>
      </Flex>
    </Section>
  );
}
