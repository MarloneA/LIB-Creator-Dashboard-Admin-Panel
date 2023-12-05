import react, {useContext, useState} from 'react';
import { Alert, IconButton, InputAdornment } from '@mui/material';
import { AuthContext } from '../../../context/AuthContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import logo from "../../../assets/logo.svg";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Copyright from '../../atoms/Copyright';

const defaultTheme = createTheme();

export default function SignUp({ supabase }) {
  const [apiError, setApiError] = useState(null)
  const navigate = useNavigate();
  const { setUser }  = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitData = new FormData(event.currentTarget);

    if (submitData.get('password') !== submitData.get('confirmPassword')) {
      setApiError("Passwords do not match")
    } else {

      let { data, error } = await supabase.auth.signUp({
        email: submitData.get('email'),
        password: submitData.get('password')
      })
  
      if (error) {
        setApiError(error)
      }
      else {
        setUser(data?.user)
        localStorage.setItem("user", data?.user?.id)
        localStorage.setItem("isVerified", data?.user?.identities[0]?.identity_data?.email_verified)
        navigate(`../profile/${data?.user?.id}`, { replace: true});
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img width="80" className="logo" src={logo} alt="logo" style={{
              margin: "2rem"
            }}
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {apiError && (
              <Alert severity="error">{ `${apiError}` }</Alert>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  id="password"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}