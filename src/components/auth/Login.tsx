"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-2xl py-2">
      <div className="border-b py-2 mb-5">
        <h1 className="text-2xl font-semibold uppercase">{loading ? "Processing" : "Login"}</h1>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="my-2">
          email
        </label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          className="p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="my-2">
          password
        </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="p-2 rounded"
        />
      </div>
      <button onClick={onLogin} className="py-2 px-4 border mt-8 rounded-md">
        Submit
      </button>
    </div>
  );
}
