// import original module declarations
import "styled-components";
import { Theme } from "./src/utils/theme";

// and extend them!
declare module "styled-components" {
  export type defaultTheme = Theme;
}
