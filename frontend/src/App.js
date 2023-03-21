import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/sign-in' element={<SignUp />} />
        <Route path='/mainpage' element={<Home />} />
      </Routes>
    </>


  )
}

export default App;
