import React, { useState } from "react"
import { signInAuthWithEmailAndPassword } from "../../utils/firebase-utils"
import "./sign-in-form.styles.scss"
import TextField from "@mui/material/TextField"
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { SignInLogoButtons } from "./sign-in-logo-buttons"

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
        <Typography component="h1" variant="h5" sx={{ marginBottom: "10px" }}>
          Sign in to your account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, marginTop: "10px" }}
        >
          <SignInLogoButtons />
          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }}>or</Divider>
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
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href="/forgotpassword">Forgot password?</Link>
            </Grid>
            <Grid item>
              {"New here? "}
              <Link href="/signup">Sign up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
