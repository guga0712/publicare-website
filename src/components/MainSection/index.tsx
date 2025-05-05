import { Flex } from "@chakra-ui/react";
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
      px={{ md: 0, lg: 48 }}
      py={{ md: 0, lg: 8 }}
    >
      {children}
    </Flex>
  );
}
