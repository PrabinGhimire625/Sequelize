import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditForm from "../editForm/EditForm.jsx"; // Update the path as per your project structure

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null); // State to track which user to edit

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getAllUser");
      setUsers(response.data.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/deleteUser/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditUser = (userId) => {
    setEditUserId(userId); // Set the userId to trigger the EditForm component to render with the user's data
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.userName}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleEditUser(user.id)}
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render EditForm if editUserId is set */}
      {editUserId && <EditForm userId={editUserId} />}
    </div>
  );
};

export default UserList;
