import { useSelector } from "react-redux"

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
