import { VStack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <VStack maxW="560px" m="auto" minH="100vh" border="1px solid #ececec">
      {children}
    </VStack>
  );
}
