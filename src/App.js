import './style.css'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import theme from "./theme";


function App() {
  return (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
	</ThemeProvider>
  );
}

export default App;
