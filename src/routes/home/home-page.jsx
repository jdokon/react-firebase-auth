import { useSelector } from "react-redux"
import { UserInfo } from "../../components/user-info/user-info"

const HomePage = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return <div>{currentUser ? <UserInfo /> : <h1>Please Sign In</h1>}</div>
}

export default HomePage
