import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import FooterAGB from "./FooterAGB";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import theme from "../utils/theme";

function Welcome() {
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
          <Container
            align="center"
            background="gray"
            sx={{ fontWeight: "light", mt: 15 }}
          >
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "light", mt: 10 }}
            >
              Weiter mit Sozial-Media oder Email Adresse
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Button
                size="large"
                color="primary"
                variant="contained"
                sx={{ mt: 10, borderRadius: 7 }}
                startIcon={<EmailIcon />}
              >
                Weiter mit Email
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{ mt: 2, borderRadius: 7 }}
                startIcon={<FacebookIcon />}
              >
                Weiter mit Facebook
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{ mt: 2, borderRadius: 7 }}
                startIcon={<InstagramIcon />}
              >
                Weiter mit Instagram
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{ mt: 2, borderRadius: 7 }}
                startIcon={<TwitterIcon />}
              >
                Weiter mit Twitter
              </Button>
              <NavLink
                to="/register"
                style={{ marginTop: 15, color: "black", fontWeight: "bold" }}
              >
                Noch nicht registriert?
              </NavLink>
            </Grid>
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

export default Welcome;
