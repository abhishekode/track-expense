import React from "react";
import { Metadata } from "next";
import { homeMetaData } from "@/constant/metadata";

export const metadata: Metadata = { ...homeMetaData };

const Home = () => {
  return <div className="bg-gray-50 text-gray-900">
    <div className="min-h-screen">hello2</div>
    <div className="min-h-screen">hello2</div>
  </div>;
};

export default Home;
