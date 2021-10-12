import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Welcome} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
