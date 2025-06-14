import { Flex, Image, HStack, Box, Text, VStack } from "@chakra-ui/react";
import { Instagram } from "lucide-react";
import { FaApple, FaGooglePlay, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      overflow="hidden"
      height="auto"
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
      <Flex flexDir="column" gap={8} align="center">
        <Image src="/logo-3.png" alt="Logo" width={120} />
        <HStack spacing={8}>
          <Box
            backgroundColor="var(--roxo)"
            borderRadius="full"
            p={3}
            as="a"
            href="https://www.instagram.com/publicare_"
          >
            <Instagram size={24} color="white" />
          </Box>
          <Box
            backgroundColor="var(--roxo)"
            borderRadius="full"
            p={3}
            as="a"
            href="https://www.tiktok.com/@publicare_"
          >
            <FaTiktok size={24} color="white" />
          </Box>
        </HStack>
        <Text color="var(--roxo)" as="strong">
          ©2025 PubliCare BR
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        gap={4}
        width="200px"
        textAlign="center"
        marginLeft={{ base: 0, md: "10px" }}
      >
        <Text as="strong" color="var(--roxo)">
          Mapa do Site
        </Text>
        <VStack gap={1}>
          <Text color="var(--roxo)">Política de Privacidade</Text>
          <Text color="var(--roxo)">Termos de Uso</Text>
          <Text color="var(--roxo)">Contato</Text>
        </VStack>
      </Flex>
      <Flex flexDir="column" gap={8} width={{ base: "100%", md: "200px" }}>
        <Flex
          as="button"
          backgroundColor="var(--roxo)"
          gap={2}
          borderRadius="full"
          py={4}
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%", md: "200px" }}
          onClick={() => {
            alert("Em breve");
          }}
        >
          <FaApple size={32} color="white" />
          <Flex flexDir="column" textAlign="left" lineHeight={1.2}>
            <Text fontSize="12px">Download on the</Text>
            <Text>App Store</Text>
          </Flex>
        </Flex>
        <Flex
          as="button"
          backgroundColor="var(--roxo)"
          gap={2}
          borderRadius="full"
          py={4}
          alignItems="center"
          justifyContent="center"
          width={{ base: "100%", md: "200px" }}
          onClick={() => {
            alert("Em breve");
          }}
        >
          <FaGooglePlay size={28} color="white" />
          <Flex flexDir="column" textAlign="left" lineHeight={1.2}>
            <Text fontSize="12px">Download on the</Text>
            <Text>Play Store</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
