import { createContext, useReducer, useContext } from "react";
import {
  LOGIN,
  LOGOUT
} from "./actions";

// create a context
const GlobalContext = createContext();
// get it's provider
const { Provider } = GlobalContext;

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { 
        ...state, 
        email: action.email,
        userToken: action.token
      }
    case LOGOUT:
      return { 
        ...state, 
        email: "",
        userToken: ""
      }
    default:
      return state
  }
}

// custom provider to connect state with the context
const GlobalProvider = ({ value = [], ...props }) => {
  // setup some state with useReducer
  const [state, dispatch] = useReducer(reducer, {
    userToken: "",
    email: ""
  })
  // pass the state to the provider
  return <Provider value={[state, dispatch]} {...props} />
}

// custom hook
const useGlobalContext = () => {
  return useContext(GlobalContext);
}

// export the hook and the provider
export {
  GlobalProvider,
  useGlobalContext
}