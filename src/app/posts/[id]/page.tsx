"use client"
import React, { useEffect, useState } from 'react';

type IndividualPostProps = {
    params: {
        id: string;
    };
};

const IndividualPost = ({ params }: IndividualPostProps) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [params.id])

    return (
        <div className='flex flex-col items-center space-y-2'>
            <h1>Hello from Individual Post {params.id}</h1>
            <div className="card bg-amber-400 text-black w-96">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Thanks for reading the post number: {post.id}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IndividualPost;