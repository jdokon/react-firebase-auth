import { Stack } from "@mui/material"
import SignInLogoButton from "./sign-in-logo-button"
import { signInWithGooglePopup } from "../../utils/firebase-utils"
import { useNavigate } from "react-router-dom"
import GoogleLogo from "../../assets/images/googleLogo.svg"

export const SignInLogoButtons = () => {
  let navigate = useNavigate()

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    navigate("/")
  }

  return (
    <Stack direction="row" justifyContent="center">
      <SignInLogoButton
        imageSrc={GoogleLogo}
        onClick={signInWithGoogle}
        altText={"Google sign in"}
      />
    </Stack>
  )
}
