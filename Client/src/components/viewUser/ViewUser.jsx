import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const ViewUser = () => {
    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/getSingleUser/${id}`);
            console.log(response);
            setUser(response.data.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    console.log(user);

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-wrap p-5">
                    <div className="p-5">
                        <h1 className="text-xl font-bold mb-3">User ID: {user.id}</h1>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Username: {user.userName}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {user.email}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Created At: {user.createdAt}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewUser;
