import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Form/Form.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EditForm = ({ userId }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [flag, setFlag]=useState(0)
  console.log(userName)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getAllUser`);
        const user = response.data.data.find((user) => user.id === userId);
        if (user) {
          setUserName(user.userName);
          setEmail(user.email);
        }
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        setErrorMessage("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [userId,flag]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/updateUser/${userId}`, {
        userName,
        email,
        password,
      });
 
      
      setFlag(flag+1)
      location.reload();
      // Optionally handle success (navigate to success page or show a message)
    } catch (error) {
      setErrorMessage("Failed to update user information.");
      console.error(error);
    }
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>Update User</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default EditForm;
