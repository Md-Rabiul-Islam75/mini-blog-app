"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FeaturedItems = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [])


    console.log(posts);

    return (
        <div className='my-3 mx-5'>
            <h1 className='font-bold text-4xl text-center'>Welcome to our Post Blog</h1>

            <div className='grid grid-cols-1 space-y-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
 {
                posts.slice(0, 10).map((post) => (
                    <div key={post.id} className="card card-border bg-base-100 w-96">
                        <div className="card-body">
                            <h1>Post No: {post.id}</h1>
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`} className="btn btn-primary">See Post</Link>
                            </div>
                        </div>
                    </div>
                )
            )
            }
            </div>

           


        </div>
    );

};


    export default FeaturedItems;