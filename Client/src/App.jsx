import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx"; 
import Signup from "./components/Signup/Signup.jsx";
import UserList from "./components/userList/UserList.jsx";
import EditUser from "./components/editUser/EditUser.jsx";
import ViewUser from "./components/viewUser/ViewUser.jsx";
import Profile from "./components/profile/Profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/userList" element={<UserList />}></Route>
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="/viewUser/:id" element={<ViewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
