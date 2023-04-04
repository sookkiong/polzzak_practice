import { extendTheme } from "@chakra-ui/react";

// 적용이 안 된다면 _app.tsx 에서 theme 설정했는지 확인.
const pzzTheme = extendTheme({
  colors: {
    pzz: {
      main: "#75C5FF",
    },
    PRESENT: {
      // colorScheme을 사용하는 곳에서는 이렇게 50-900까지 컬러 차트가 필요하다.
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#75C5FF",
      600: "#F96400",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
  },
});

export default pzzTheme;
