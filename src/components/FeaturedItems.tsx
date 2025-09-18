"use client";
import React, { useEffect, useState } from 'react';

const FeaturedItems = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [])


    console.log(posts);

    return (
        <div>
            <h1>All Posts: {posts.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
 {
                posts.slice(0, 5).map((post) => (
                    <div className="card card-border bg-base-100 w-96">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
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