"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearch } from "@/context/SearchContext";

const FeaturedItems = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const { term } = useSearch();                    // ⬅️ read context

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="my-3 mx-5">
      {/* <h1 className="font-bold text-4xl text-center">Welcome to our Post Blog</h1> */}
      <div className="grid grid-cols-1 items-center justify-center space-y-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, 10).map((post) => (
          <div key={post.id} className="card card-border shadow-lg rounded-lg bg-lime-400 w-85 h-80 md:w-75 hover:translate-y-2">
            <div className="card-body">
              <h1>Post No: {post.id}</h1>
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`} className="btn btn-primary">
                  See Post
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
