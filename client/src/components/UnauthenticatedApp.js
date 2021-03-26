import { useRef } from "react";
import { useGlobalContext } from "../context/GlobalState";
import axios from "axios";
import { LOGIN } from "../context/actions";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const UnauthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const history = useHistory();
  console.log(history);

  const emailRef = useRef();
  const passwordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();

  const submitLogin = async (event) => {
    event.preventDefault();
    // get the info from the refs
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // make an ajax request
    const {
      data: { email, token },
    } = await axios.post("/auth/login", creds);

    // save the user in local storage
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        email,
        token,
      })
    );
    dispatch({
      type: LOGIN,
      email,
      token,
    });
  };

  const submitRegistration = async (event) => {
    event.preventDefault();
    const creds = {
      email: registerEmailRef.current.value,
      password: registerPasswordRef.current.value,
    };
    const { status } = await axios.post("/auth/register", creds);

    if (status === 200) {
      history.push("/");
    }
  };

  return (
    <Router>
      <Route exact path="/">
        <form onSubmit={submitLogin}>
          <input type="text" name="email" placeholder="Email" ref={emailRef} />
          <input
            type="text"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button type="submit">Login</button>
        </form>
      </Route>
      <Route exact path="/register">
        <form onSubmit={submitRegistration}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            ref={registerEmailRef}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            ref={registerPasswordRef}
          />
          <button type="submit">Sign Up</button>
        </form>
      </Route>
    </Router>
  );
};

export default UnauthenticatedApp;
