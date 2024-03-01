import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link, Outlet } from "react-router-dom"
// import MenuIcon from "@mui/icons-material/Menu"

export const Navigation = () => {
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
            <Link to="/signin" color="inherit">
              <Button color="inherit">Sign In</Button>
            </Link>
            {/* <button onClick={signOutUser}>SIGN OUT</button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  )
}
