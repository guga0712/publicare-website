import { Flex, Text } from "@chakra-ui/react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CardWhyProps {
  icon: keyof typeof Icons;
  description: string;
}

export default function CardWhy({ icon, description }: CardWhyProps) {
  const SelectedIcon = Icons[icon] as LucideIcon;

  return (
    <Flex
      backgroundColor="rgba(255, 255, 255, 0.1)"
      borderRadius="2xl"
      p={{ base: 6, md: 6 }}
      flex={1}
      flexDir="column"
      gap={4}
      maxW={{ base: "100%", md: "300px" }}
      alignItems="center"
    >
      {SelectedIcon && <SelectedIcon size={50} />}
      <Text fontWeight="500">{description}</Text>
    </Flex>
  );
}
