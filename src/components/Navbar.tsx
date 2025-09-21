"use client";

import { useSearch } from "@/context/SearchContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const links = [
  { id: 1, title: "Dashboard", url: "/dashboard" },
  { id: 2, title: "Myposts", url: "/mypost" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { term, setTerm } = useSearch();

  // Get user from Redux
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const userLoggedIn = !!currentUser;

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-evenly">
      <div>
        <Link href="/" className="hidden md:block md:font-bold text-2xl">
          MiniBlog
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Filter by Post title"
          className="input input-bordered w-24 md:w-auto"
          value={term}
          onChange={(e) => setTerm(e.target.value)}  // ⬅️ update context
        />
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">


        {userLoggedIn && (
          <>
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            ))}
          </>
        )}



        {!userLoggedIn ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <span className="font-bold">Welcome, {currentUser.username}</span>
            <Link className="mx-5" href={"/logout"}>Logout</Link>
          </>
        )}
        
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        {open ? (
          <Image
            src={"/close.png"}
            width={20}
            height={20}
            alt={""}
            onClick={() => setOpen(false)}
          />
        ) : (
          <Image
            src={"/open.png"}
            width={20}
            height={20}
            alt={""}
            onClick={() => setOpen(true)}
          />
        )}

        {open && (
          <div className="bg-red-500 text-white absolute top-15 left-0 w-full h-[calc(110vh-3rem)] flex flex-col gap-8 p-4 text-center items-center justify-center text-3xl z-10 md:hidden">
            <div className="my-2 font-bold">
              <Link
                href={"/"}
                onClick={() => setOpen(false)}
                className="btn btn-ghost text-xl"
              >
                MiniBlog
              </Link>
            </div>

             {userLoggedIn && (
            <>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            </>
             )}

            {!userLoggedIn ? (
              <Link href={"/login"} onClick={() => setOpen(false)}>
                Login
              </Link>
            ) : (
              <>
                <span className="font-bold">Welcome, {currentUser.username}</span>
                <Link className="mx-5" href={"/logout"}>Logout</Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
