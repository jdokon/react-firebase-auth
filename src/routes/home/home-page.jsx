import { useSelector } from "react-redux"
import { signOutUser } from "../../utils/firebase-utils"

const HomePage = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <div>
      {currentUser ? (
        <button onClick={signOutUser}>SIGN OUT</button>
      ) : (
        <h1>Please Sign In</h1>
      )}
    </div>
  )
}

export default HomePage
