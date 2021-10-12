import { Container, Typography, Button, Grid } from "@mui/material";
import LinkOffSharpIcon from "@mui/icons-material/LinkOffSharp";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

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
          Diese Seite konnte nicht gefunden werden.
        </Typography>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          sx={{ mt: 5, borderRadius: 7, minWidth: 300 }}
          onClick={redirect}
        >
          Zurück zur Startseite
        </Button>
        <Footer title="Appoint - Das einfache Leben" />
      </Container>
    </div>
  );
};

export default NotFound;
