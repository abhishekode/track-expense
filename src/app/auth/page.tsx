import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import React from "react";

const Auth = () => {
  return (
    <div className="flex min-h-screen justify-center gap-4 items-center container mx-auto">
      <div className="md:w-1/2 w-full p-10 border min-h-[28rem]">
        <Login />
      </div>
      <div className="md:w-1/2 w-full p-10 border min-h-[28rem]">
        <Register />
      </div>
    </div>
  );
};

export default Auth;
