import { useGlobalContext } from "../context/GlobalState";
import { LOGOUT } from "../context/actions";

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: LOGOUT })
  }

  return (
    <>
      <p> You're logged in.</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default AuthenticatedApp