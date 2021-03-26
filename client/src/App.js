import { useEffect } from "react";
import { useGlobalContext } from "./context/GlobalState";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import './App.css';
import { LOGIN } from "./context/actions";


function App() {
  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (localStorage.getItem("userInfo")) {
       const { email, token } = JSON.parse(localStorage.getItem("userInfo"));
      dispatch({
        type: LOGIN,
        email,
        token
      })
    }
  }

  return (
    <div className="App">
      { state.userToken ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
