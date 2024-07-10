import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx"; 
import Signup from "./components/Signup/Signup.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/profile/Profile.jsx";
import UserList from "./components/userList/UserList.jsx";
import EditForm from "./components/editForm/EditForm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/userList" element={<UserList />}></Route>
          <Route path="/editForm" element={<EditForm />}></Route>
          <Route path="/deleteUser/:id" element={<UserList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
