import { Flex } from "@chakra-ui/react";

export default function Section({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      py={{ md: 0, lg: 8 }}
      bgColor={color}
    >
      {children}
    </Flex>
  );
}
