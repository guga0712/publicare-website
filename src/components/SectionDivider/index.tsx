import React from "react";
import { Image } from "@chakra-ui/react";

export default function SectionDivider({ src }: { src: string }) {
  return <Image src={src} alt="Section Divider" width="100%" m={0} p={0} />;
}
