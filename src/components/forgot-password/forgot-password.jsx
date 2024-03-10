import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { sendEmailForPasswordReset } from "../../utils/firebase-utils"

const defaultFormFields = {
  email: "",
}

export const ForgotPassword = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await sendEmailForPasswordReset(email)
      alert("email sent")
    } catch (error) {
      alert("An unexpected error occurred")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: "10px" }}>
          Reset Password
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{ marginBottom: "10px" }}
        >
          Enter the email address of the account you want to change or set a
          password.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, marginTop: "10px" }}
        >
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            RESET PASSWORD
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
