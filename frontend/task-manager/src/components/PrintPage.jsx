
import React from 'react'
import DashboardLayout from './layouts/DashboardLayout';
import { API_PATHS } from '../utils/apiPaths';
import axiosInstance from '../utils/axiosInstance';
import { useState } from 'react';
import { useEffect } from 'react';

const PrintPage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const getAllUsers = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
            if (response.data?.length > 0) {
                setAllUsers(response.data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        getAllUsers();
        return () => { };
    }, []);
    console.log(allUsers);
    return (
        <DashboardLayout activeMenu={"Team Page"}>
            <h2 className='text-2xl font-semibold my-4'>User and tasks</h2>
            {allUsers.map((user, index) => (
                <div key={index} className='flex gap-4 border p-4 mb-2 w-5/8'>
                    <h3>{user.name}</h3>
                    {user.completedTasks <= 0 && user.pendingTasks <= 0 && user.inProgressTasks <=0 ? (
                        <p>No task Assigned</p>
                    ) : (
                        <div className='flex gap-2'>
                            <div>Pending task : {user.pendingTasks}</div>
                            <div>In Progress task : {user.inProgressTasks}</div>
                            <div>Completed task : {user.completedTasks}</div>
                        </div>
                    )}
                </div>
            ))}

        </DashboardLayout>
    )
}

export default PrintPage