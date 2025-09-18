"use client";

import React, { useEffect, useState } from 'react';



const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching posts:', error));
    },[])


    console.log(posts);

    return (
        <div>
            <h1>All Posts: {posts.length}</h1>


    
        </div>
    );
};

export default AllPosts;