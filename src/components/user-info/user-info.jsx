import { Card, CardContent, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import "./user-info-styles.scss"

export const UserInfo = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Signed In User
        </Typography>
        {currentUser ? (
          <div>
            <Typography variant="body1">
              <strong>Name:</strong> {currentUser.displayName}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {currentUser.email}
            </Typography>
            <Typography variant="body1">
              <strong>UID:</strong> {currentUser.uid}
            </Typography>
            <Typography variant="body1">
              <strong>Creation Date:</strong>{" "}
              {new Date(currentUser.metadata.creationTime).toLocaleDateString()}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1">Loading user information...</Typography>
        )}
      </CardContent>
    </Card>
  )
}
