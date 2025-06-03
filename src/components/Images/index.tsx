import { Image } from "@chakra-ui/react";

interface ImageProps {
  src: string;
}

export default function Images({ src }: ImageProps) {
  return (
    <Image
      src={src}
      alt="hero"
      width="100%"
      height="auto"
      maxWidth="400px"
      maxHeight="400px"
      objectFit="contain"
    />
  );
}
