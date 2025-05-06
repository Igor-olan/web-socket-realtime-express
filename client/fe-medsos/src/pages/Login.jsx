import {Box, Button, FormControl, FormLabel, styled, TextField, Typography,  Divider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { SignInContainer, Card } from "../utils/style";

const Login = () => {
  
  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Username</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="user"
                type="user"
                name="user"
                placeholder="username"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                // error={passwordError}
                // helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={validateInputs}
            >
              Sign in
            </Button>
            <Divider>or</Divider>
            <center>
            <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </center>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
};

export default Login;