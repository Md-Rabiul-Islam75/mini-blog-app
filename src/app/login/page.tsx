"use client"; // ✅ must be first line

import { loginSuccess } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const LoginPage = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    const res = await fetch("/users.json");
    const users: User[] = await res.json();

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && password === u.username
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    dispatch(loginSuccess(user));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged In Successfull.",
      showConfirmButton: false,
      timer: 1500
    });
    router.push("/"); // ✅ redirect works
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered" />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
