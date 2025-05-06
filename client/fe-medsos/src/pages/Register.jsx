import {Box, Button, FormControl, FormLabel, Grid, styled, TextField, Typography, Divider, InputLabel, MenuItem, Select} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { CardRegister, SignInContainer } from "../utils/style"

const Register = () => {
  
    return (
      <>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
          <CardRegister variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign Up
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
              <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3,lg:4}}>
                <Grid size={60}>
                <FormControl fullWidth>
              <FormLabel htmlFor="firstname">Username</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="username"
                  placeholder="username"
                  type="text"
                  id="username"
                  autoComplete="username"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
                </Grid>
                <Grid size={6}>
                <FormControl fullWidth>
              <FormLabel htmlFor="firstname">FirstName</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="firstname"
                  placeholder="firstname"
                  type="text"
                  id="firstname"
                  autoComplete="firstname"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
                </Grid>
                <Grid size={6}>
                <FormControl fullWidth>
              <FormLabel htmlFor="lastname">LastName</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="lastname"
                  placeholder="lastname"
                  type="text"
                  id="lastname"
                  autoComplete="lastname"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
                </Grid>
                <Grid size={6}>
                <FormControl fullWidth>
              <FormLabel htmlFor="lastname">Email</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="email"
                  placeholder="email"
                  type="email"
                  id="email"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
                </Grid>
                <Grid size={6}>
                <FormControl fullWidth>
              <FormLabel htmlFor="lastname">Password</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="password"
                  placeholder="password"
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
                </Grid>
                <Grid size={6}>
                 <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-lable" >class</InputLabel>
                  <Select
                  labelId="demo-simple-select-lable"
                  id="demo-simple-select"
                  label="choose">
                    <MenuItem value={"X"}>X</MenuItem>
                    <MenuItem value={"XI"}>XI</MenuItem>
                    <MenuItem value={"XII"}>XII</MenuItem>
                    <MenuItem value={"XIII"}>XIII</MenuItem>
                  </Select>
                  </FormControl> 
                </Grid>
                <Grid size={6}>
                 <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-lable">major</InputLabel>
                  <Select
                  labelId="demo-simple-select-lable"
                  id="demo-simple-select"
                  label="choose">
                    <MenuItem value={"TMP"}>TMP</MenuItem>
                    <MenuItem value={"TBSM"}>TBSM</MenuItem>
                    <MenuItem value={"TKRO"}></MenuItem>
                    <MenuItem value={"PPLG"}>PPLG</MenuItem>
                    <MenuItem value={"TJKT"}>TJKT</MenuItem>
                    <MenuItem value={"DKV"}>DKV</MenuItem>
                    <MenuItem value={"MPLB"}>MPLB</MenuItem>
                    <MenuItem value={"HR"}>HR</MenuItem>
                  </Select>
                  </FormControl> 
                </Grid>
                <Grid size={6}>
                 <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-lable">gender</InputLabel>
                  <Select
                  labelId="demo-simple-select-lable"
                  id="demo-simple-select"
                  label="choose">
                    <MenuItem value={"M"}>Male</MenuItem>
                    <MenuItem value={"F"}>Female</MenuItem>
                  </Select>
                  </FormControl> 
                </Grid>
              </Grid>
              
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={validateInputs}
                >
                Sign up
              </Button>
                <Divider>or</Divider>
              <center>
              <p>Have an account? <Link to={"/login"}>Login</Link></p>
              </center>
            </Box>
          </CardRegister>
        </SignInContainer>
    </>
  )
}

export default Register