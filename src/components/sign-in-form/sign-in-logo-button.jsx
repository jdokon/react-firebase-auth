import { Button } from "@mui/material"
import React from "react"
import { styled } from "@mui/system"

// Styled button with hover effect
const CustomButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  minWidth: "auto",
  padding: 0,
  margin: theme.spacing(1),
  "&:hover": {
    transform: "scale(0.95)", // Shrinks the button a bit on hover
  },
  // Reset the default MUI button styles
  backgroundColor: "transparent",
  boxShadow: "none",
}))

const SignInLogoButton = ({ imageSrc, onClick, altText }) => {
  return (
    <CustomButton onClick={onClick}>
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: "100%", height: "100%" }}
      />
    </CustomButton>
  )
}

export default SignInLogoButton
