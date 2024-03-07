import React, { useState } from "react"
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase-utils"
import { FormInput } from "../form-input/form-input"
import "./sign-in-form.styles.scss"
import TextField from "@mui/material/TextField"
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

const defaultFormFields = {
  email: "",
  password: "",
}

export const SignInForm = () => {
  let navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password)
      resetFormFields()
      navigate("/")
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password")
          break
        default:
          alert("An unexpected error occurred")
          break
      }
    }
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    navigate("/")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            value={email}
            onChange={handleChange}
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
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SIGN IN
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              {"New here? "}
              <Link href="/signup" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
