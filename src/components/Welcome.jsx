import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import theme from "../utils/theme";

function Welcome() {
  let history = useHistory();

  const redirect = () => {
    history.push("/login");
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
          <Container align="center" sx={{ fontWeight: "light", mt: 15 }}>
            <Typography variant="h4" gutterBottom>
              Willkomen
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "light", mt: 10 }}
            >
              Das praktische Tool für deine Terminen bei all deinen
              Lieblingsservices
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              style={{ maxWidth: 575 }}
            >
              <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{ mt: 10, borderRadius: 7 }}
                onClick={redirect}
              >
                Weiter
              </Button>
            </Grid>
            <Footer title="Appoint - Das einfache Leben" />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
