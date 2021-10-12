import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Welcome} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
