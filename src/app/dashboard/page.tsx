"use client";
import React from 'react';
import { useSelector } from 'react-redux';

interface User {
    username: string;
    phone: string;
    address: {
        city: string;
    };
    company: {
        name: string;
    };
}

interface RootState {
    user: {
        currentUser: User;
    };
}

const Dashboard = () => {
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    console.log(currentUser);
    return (
        <div className=' '>
            <div className="card bg-amber-400 text-green-500">
                <div className="card-body items-center text-center">
                    <h2 className="font-bold text-3xl text-black">Hello! My name is {currentUser.username}</h2>
                    <p className='text-black'>My Phone Number: {currentUser.phone}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">My City Name: {currentUser.address.city}</button>
                        <button className="btn btn-accent">Company Name: {currentUser.company.name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;