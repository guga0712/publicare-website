import { Flex } from "@chakra-ui/react";
import React, { JSX } from "react";

interface IMainSectionProps {
  children: JSX.Element;
}

export default function MainSection({ children }: IMainSectionProps) {
  return (
    <Flex
      backgroundImage="url('/fundo.png')"
      width={"100%"}
      height={"100vh"}
      flexDir={"column"}
      px={{ md: 0, lg: 36 }}
      py={{ md: 0, lg: 8 }}
    >
      {children}
    </Flex>
  );
}
