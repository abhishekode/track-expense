"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onRegister = async () => {
    try {
      const response = await axios.post("/api/users/register", user);
      router.push("/login");
    } catch (error: any) {
      console.log("Sign up failed", error.message);
    }
  };

  return (
    <div>
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button onClick={onRegister}>Sign Up</button>

      <Link href="/login">Visit login page</Link>
    </div>
  );
}
