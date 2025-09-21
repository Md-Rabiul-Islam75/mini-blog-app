"use client"
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyPost = () => {
    const currentUser = useSelector((state: any) => state.user.currentUser);
    console.log(currentUser);

    const [mypost, setMypost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentUser.id}`)
            .then(res => res.json())
            .then(data => setMypost(data));
    }, [currentUser.id])

    return (
        <div className="flex justify-center space-y-2 m-2">
            <div>
                <h1 className="font-bold m-2">Hello This is My Post: ID No: {currentUser.id}</h1>
                <div className="card bg-amber-400 text-black w-96 mx-2">
                    <div className="card-body">
                        <h2 className="card-title">{mypost.title}</h2>
                        <p className="font-bold text-xl my-4">{mypost.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPost;