import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Welcome} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
