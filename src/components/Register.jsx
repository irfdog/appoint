import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import FooterAGB from "./FooterAGB";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";

function Register() {
  const theme = useTheme();

  const redirect = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("firstName"),
      lastName: data.get("lastName"),
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
          <Container align="center" background="gray" sx={{ mt: 10 }}>
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
              sx={{ fontWeight: "light", mt: 7 }}
              gutterBottom
            >
              oder
            </Typography>
            <Box
              component="form"
              sx={{ mt: 5, "& .MuiTextField-root": { m: 1, width: 300 } }}
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
                    id="firstName"
                    name="firstName"
                    label="Vorname"
                    variant="standard"
                    color="secondary"
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Nachname"
                    variant="standard"
                    color="secondary"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    required
                    id="password"
                    label="Passwort"
                    name="password"
                    type="password"
                    variant="standard"
                    color="secondary"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    color="secondary"
                    autoComplete="email"
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
                  Registrieren
                </Button>
                <NavLink
                  to="/login"
                  style={{ marginTop: 15, color: "black", fontWeight: "bold" }}
                >
                  Login?
                </NavLink>
              </Grid>
            </Box>
            <FooterAGB
              description="Mit deiner Registrierung akzeptierst du
                           unsere "
            />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Register;
