import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface PsychologistCardProps {
  name: string;
  specialty: string;
  price: number;
  type: string;
  image: string;
  crp: string | number;
  link: string;
  description: string;
}

export default function PsychologistCard({
  name,
  specialty,
  price,
  image,
  crp,
  link,
  description,
}: PsychologistCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      backgroundColor="var(--rosa-escuro)"
      borderRadius="2xl"
      p={4}
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      width="350px"
      justifyContent="space-between"
      boxShadow="md"
    >
      <Flex alignItems="center" w="100%">
        <Image
          src={image}
          alt="Logo"
          width="80px"
          height="80px"
          borderRadius="full"
          objectFit="cover"
          mr={4}
        />
        <Box>
          <Text as="strong" fontSize={18} color="white">
            {name}
          </Text>
          <Text fontSize={14} color="white" fontWeight="600">
            Psicologia
          </Text>
          <Text fontSize={14} color="white">
            CRP: {crp}
          </Text>
        </Box>
      </Flex>
      <Flex flexDir="column" w="100%">
        <Text fontSize={14} color="white">
          <Text fontSize={14} color="white" fontWeight="bold" mb={2}>
            {specialty}
          </Text>
          {description.split(" ").slice(0, 30).join(" ")}...
          {description.split(" ").length > 30 && (
            <Text
              as="span"
              fontWeight="bold"
              ml={1}
              cursor="pointer"
              onClick={onOpen}
            >
              Ver mais
            </Text>
          )}
        </Text>
        <Flex
          justifyContent="space-between"
          mt={2}
          borderTop="1px solid"
          borderColor="#fff"
          pt={2}
        >
          <Text fontSize={14} fontWeight="bold">
            Sessão de 50 min
          </Text>
          <Text fontSize={14} color="white" fontWeight="bold">
            R$ {price}
          </Text>
        </Flex>
      </Flex>

      <Button
        width="full"
        backgroundColor="white"
        color="var(--rosa-escuro)"
        borderRadius="full"
        _hover={{ backgroundColor: "none" }}
        _active={{ backgroundColor: "none" }}
        mt={2}
        onClick={() => window.open(link, "_blank")}
      >
        Agendar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="var(--rosa-escuro)">
            Descrição Completa
          </ModalHeader>
          <ModalCloseButton
            outline="var(--rosa-escuro) !important"
            color="var(--rosa-escuro) !important"
          />
          <ModalBody>
            <Text color="var(--rosa-escuro)">{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
