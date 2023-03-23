import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/mainpage' element={<Home />} />
        <Route path='/LogIn' element={<LogIn />} />
      </Routes>
    </>


  )
}

export default App;
