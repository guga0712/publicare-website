import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IMainSectionProps {
  children: ReactNode;
}

export default function MainSection({ children }: IMainSectionProps) {
  return (
    <Flex
      backgroundImage="url('/fundo.png')"
      backgroundRepeat={{ base: "repeat", md: "round" }}
      width={"100%"}
      height={{ base: "auto", md: "100vh" }}
      flexDir={"column"}
      py={{ md: 0, lg: 8 }}
      position="relative"
    >
      {children}
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width="100%"
        height="80px"
        pointerEvents="none"
        bgGradient="linear(to-b, transparent, var(--roxo-escuro))"
      />
    </Flex>
  );
}
