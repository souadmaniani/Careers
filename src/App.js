import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import theme from "./theme";
import { Test } from "./test";


function App() {
  return (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Test />
		</ThemeProvider>
  );
}

export default App;
