import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IMainSectionProps {
  children: ReactNode;
  color: string;
}

export default function MainSection({ children, color }: IMainSectionProps) {
  return (
    <Flex
      width={"100%"}
      height={{ base: "auto", md: "100%" }}
      flexDir={"column"}
      py={{ md: 0, lg: 8 }}
      position="relative"
      overflow="hidden"
      backgroundColor="var(--roxo-escuro)"
    >
      <div style={{ zIndex: 1000 }}>{children}</div>
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width="100%"
        height="80px"
        pointerEvents="none"
        bgGradient={`linear(to-b, transparent, ${color})`}
        zIndex={2}
      />
      <Flex
        backgroundImage="url('/noise-light.png')"
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        left={0}
        zIndex={1}
        opacity={1}
        animation="fadeIn 2s linear infinite"
      ></Flex>
      <Flex
        // background="conic-gradient(from 0deg, var(--ciano), var(--roxo), var(--rosa-escuro), var(--rosa), var(--roxo-escuro), var(--ciano))"
        filter="blur(100px)"
        animation="spinBlob 4s linear infinite"
        background="hsla(267,96%,77%,1)"
        backgroundImage="radial-gradient(at 40% 20%, hsla(214,57%,78%,1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(262,80%,82%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(316,68%,88%,1) 0px, transparent 50%),
radial-gradient(at 81% 34%, hsla(267,96%,77%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(199,59%,76%,1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(340,74%,84%,1) 0px, transparent 50%);"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={0}
        overflow="hidden"
      ></Flex>
    </Flex>
  );
}
