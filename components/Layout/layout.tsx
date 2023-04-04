import { VStack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

// 페이지 전체의 크기를 정함. 제일 큰 레이아웃임 _app.tsx 파일에서 페이지들을 감쌈
export default function Layout({ children }: Props) {
  return (
    <VStack
      align="stretch"
      justify="stretch"
      maxW="560px"
      m="auto"
      minH="100vh"
      border="1px solid #ececec"
      spacing={0}
    >
      {children}
    </VStack>
  );
}
