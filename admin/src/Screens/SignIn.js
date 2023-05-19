import * as React from "react";
// import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Images/logo.png";
import Buttons from "../Buttons/Buttons";
import { Paper } from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  const Styles = {
    logo: {
      display: "block",
      margin: "auto",
      width: "100px",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={5} sx={{ marginTop: 10, borderRadius: 3 }}>
            <Box
              sx={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Link href="/" component="a">
                <img style={Styles.logo} src={Logo} alt="Logo" />
              </Link>

              <Typography
                component="h1"
                variant="h7"
                sx={{ fontFamily: "Quicksand" }}
              >
                Welcome
              </Typography>
              <Typography
                component="h5"
                variant="h9"
                sx={{ fontFamily: "Quicksand", textAlign: "center" }}
              >
                Admin Sign In
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // autoComplete="email"
                  // autoFocus
                  InputLabelProps={{
                    style: { fontFamily: "Quicksand" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  id="outlined-password-input"
                  type="password"
                  //id="password"
                  autoComplete="current-password"
                  // autoComplete="current-password"
                  InputLabelProps={{
                    style: { fontFamily: "Quicksand" },
                  }}
                />

                <Buttons
                  sx={{ width: "100%", fontFamily: "Quicksand" }}
                  label="Sign In"
                  to="/"
                />

                <Grid container>
                  <Link
                    underline="none"
                    sx={{
                      color: "black",
                      marginTop: "10px",
                      fontFamily: "Quicksand",
                    }}
                    href="/AdminSignUp"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}
