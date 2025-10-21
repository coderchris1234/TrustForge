import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./Pages/Auth/Signup";
// import Login from "./Pages/Auth/Login"





const App =()=> {
 

  return (
   <BrowserRouter>
      <Routes>
         <Route path={"/"} element={<div>Landing Page</div>} />
         {/* <Route path={"/login"} element={<Login/>} /> */}
         <Route path={"/signup"} element={<SignupForm />} />
         <Route path={"/"} element={<div>Landing Page</div>} />
         <Route path={"/"} element={<div>Landing Page</div>} />
      </Routes>
   </BrowserRouter>
   
  )
}

export default App
