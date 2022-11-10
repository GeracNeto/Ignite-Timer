import 'styled-components'
import { deafultTheme } from '../styles/themes/default'

type ThemeType = typeof deafultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}