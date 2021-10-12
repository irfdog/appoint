import { Container, Typography, Button, Grid } from "@mui/material";
import LinkOffSharpIcon from "@mui/icons-material/LinkOffSharp";
import Footer from "./Footer";
import { useHistory, NavLink } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/login");
  };

  return (
    <div>
      <Container align="center" sx={{ fontWeight: "light", mt: 30 }}>
        <LinkOffSharpIcon fontSize="large" />
        <Typography variant="subtitle1" sx={{ fontWeight: "light", mt: 3 }}>
          Diese Seite kann nicht verlasen werden.
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{ mt: 5, borderRadius: 7, minWidth: 300, maxWidth: 500 }}
            onClick={redirect}
          >
            Zurück zur Startseite
          </Button>
          <NavLink
            to="/help"
            style={{ marginTop: 15, color: "black", fontWeight: "medium" }}
          >
            Hilfe?
          </NavLink>
        </Grid>
        <Footer title="Appoint - Das einfache Leben" />
      </Container>
    </div>
  );
};

export default NotFound;
