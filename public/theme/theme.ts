import { extendTheme } from "@chakra-ui/react";

// 적용이 안 된다면 _app.tsx 에서 theme 설정했는지 확인.
const pzzTheme = extendTheme({
  colors: {
    pzz: {
      main: "#75C5FF",
    },
  },
});

export default pzzTheme;
