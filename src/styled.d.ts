// import original module declarations
import "styled-components";
import { Theme } from "./utils/theme";

// and extend them!
declare module "styled-components" {
  export type defaultTheme = Theme;
}
