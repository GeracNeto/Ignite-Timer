import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { deafultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={deafultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
    </ThemeProvider>
  )
}

