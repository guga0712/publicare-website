import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

interface PsychologistCardProps {
  name: string;
  specialty: string;
  price: number;
  type: string;
  image: string;
}

export default function PsychologistCard({
  name,
  specialty,
  price,
  type,
  image,
}: PsychologistCardProps) {
  return (
    <Box
      backgroundColor="var(--rosa-escuro)"
      borderRadius="2xl"
      py={4}
      px={6}
      display="flex"
      flexDir="column"
      alignItems="center"
      maxW="300px"
    >
      <Image src={image} alt="Logo" width="100%" />
      <Flex flexDir="column" my={4} textAlign="left">
        <Text>
          <Text as="strong" fontSize={24}>
            {name}
          </Text>
          <Text>
            <Text as="strong">CRP: </Text> 06/119292
          </Text>
        </Text>
        <Text>
          <Text as="strong">Especialidade: </Text>
          {specialty}
        </Text>
        <Text>
          <Text as="strong">Valor por sessão: </Text> R$ {price}
        </Text>
        <Text>
          <Text as="strong">Tipo de atendimento: </Text> {type}
        </Text>
      </Flex>
      <Button
        width="full"
        backgroundColor="white"
        color="var(--rosa-escuro)"
        borderRadius="full"
        _hover={{ backgroundColor: "none" }}
        _active={{ backgroundColor: "none" }}
      >
        Agendar
      </Button>
    </Box>
  );
}
