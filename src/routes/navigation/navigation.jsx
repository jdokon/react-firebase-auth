import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import { useSelector } from "react-redux"
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { signOutUser } from "../../utils/firebase-utils"

export const Navigation = () => {
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser)

  const handleSignIn = () => {
    navigate("/signin")
  }

  const handleSignOut = () => {
    signOutUser()
    navigate("/signin")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sign In / Sign Up Demo
            </Typography>

            {currentUser ? (
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : (
              <Button color="inherit" onClick={handleSignIn}>
                Sign In
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  )
}
