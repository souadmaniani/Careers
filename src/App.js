import './style.css'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import theme from "./theme";
import { NavBar } from "./components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

function App() {
  return (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/">
					
				</Route>
			</Switch>
		</Router>
	</ThemeProvider>
  );
}

export default App;
