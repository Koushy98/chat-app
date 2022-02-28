import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./components/Chat";

function App() {
  //check authentication(return boolean)
  const [user] = useAuthState(auth);
  return <div>{user ? <Chat /> : <SignIn />}</div>;
}

export default App;
