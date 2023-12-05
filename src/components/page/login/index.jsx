import react, {useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { createClient } from '@supabase/supabase-js'

import logo from "../../../assets/logo.svg";
import { AuthContext } from '../../../context/AuthContext';

const supabaseUrl = 'https://vzhykbplsgtdrqdicjlb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aHlrYnBsc2d0ZHJxZGljamxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MjY0MDEsImV4cCI6MjAxNzIwMjQwMX0.oaCX_2R_tiYT4vpKACldJ3VH3uD8LFwuLg5xJAtUpLk'


const supabase = createClient(supabaseUrl, supabaseKey)

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Link nfc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [newError, setnewError] = useState("");
  const navigate = useNavigate();

  const { setUser }  = useContext(AuthContext)


  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginSubmitData = new FormData(event.currentTarget);


    let { data, error } = await supabase.auth.signInWithPassword({
      email: loginSubmitData.get('email'),
      password: loginSubmitData.get('password')
    })

    if (["authenticated"].includes(data?.user?.aud)) {
      setUser(data?.user)
      localStorage.setItem("user", data?.user?.id)
      navigate("/")
    }

    if (error?.message) {
      setnewError(error.message)
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };  

  const errorMessage = (error) => {
      console.log(error);
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
            Sign in
          </Typography>


          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Alert severity="error">{ "new error" }</Alert>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          {/* <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>or</p>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </Box> */}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}