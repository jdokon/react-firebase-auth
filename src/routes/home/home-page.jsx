import { useSelector } from "react-redux"
import { signOutUser } from "../../utils/firebase-utils"

const HomePage = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <div>
      {currentUser ? (
        <div>
          <h2>Welcome</h2>
        </div>
      ) : (
        <h1>Please Sign In</h1>
      )}
    </div>
  )
}

export default HomePage
