import Typography from "@mui/material/Typography";
import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import FooterAGB from "./FooterAGB";
import Grid from "@mui/material/Grid";
import { NavLink, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //input validation
  const [errors, setErrors] = useState({});

  const theme = useTheme();

  // back to login screen?
  let history = useHistory();
  const redirect = () => {
    history.push("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // create account -> post user
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <div>
      <AppBar
        position="relative"
        align="center"
        style={{ background: theme.palette.primary.gradient }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
          Appoint
        </Typography>
      </AppBar>
      <main>
        <div>
          <Container align="center" background="gray" sx={{ mt: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "light" }} gutterBottom>
              Benutzerkonto erstellen
            </Typography>

            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ mt: 6, borderRadius: 7, minWidth: 300, maxWidth: 500 }}
              onClick={redirect}
            >
              Weiter mit Sozial-Media
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "light", mt: 3 }}
              gutterBottom
            >
              oder
            </Typography>
            <Box
              component="form"
              sx={{ mt: 1, "& .MuiTextField-root": { m: 1, width: 300 } }}
              noValidate
              onSubmit={handleSubmit}
              autoComplete="off"
              style={{ direction: "column" }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sm={12}>
                  <TextField
                    required
                    name="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    color="secondary"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    required
                    label="Passwort"
                    name="password"
                    type="password"
                    variant="standard"
                    color="secondary"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
                <Button
                  type="submit"
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{
                    mt: 4,
                    borderRadius: 7,
                    minWidth: 300,
                    maxWidth: 500,
                  }}
                >
                  Login
                </Button>
                <NavLink
                  to="/register"
                  style={{ marginTop: 7, color: "black", fontWeight: "bold" }}
                >
                  Noch immer kein Konto?
                </NavLink>
              </Grid>
            </Box>
            <FooterAGB
              description="Mit deiner Anmeldung akzeptierst du
                           unsere "
            />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Register;
