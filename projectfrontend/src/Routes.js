import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./core/Home"
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from "./auth/helper/PrivateRoutes"
import AdminRoute from "./auth/helper/AdminRoutes"
import AdminDashboard from "./user/AdminDashBoard"
import UserDashBoard from "./user/UserDashBoard"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} /> */}
        {/* <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;