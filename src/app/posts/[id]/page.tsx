"use client";
import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Note: No explicit IndividualPostProps needed
const IndividualPost = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="card bg-amber-400 text-black w-96 mx-auto my-4">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn">
            Thanks for reading the post number: {post.id}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
