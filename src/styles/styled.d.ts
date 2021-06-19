import 'styled-components';
import {ILightTheme} from './themes/light';

declare module 'styled-components' {
  export interface DefaultTheme extends ILightTheme {}
}
