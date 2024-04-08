"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { ModeToggle } from "../Theme";
import { useGlobalUser } from "@/components/context/UserContext";
import { LogOutIcon } from 'lucide-react'
const Header = () => {
  const { user, setUser } = useGlobalUser();
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    ...(user
      ? user.role === "student"
        ? [{ id: 6, name: "Student", path: "/student" }]
        : user.role === "admin"
          ? [{ id: 4, name: "Admin", path: "/admin" }]
          : []
      : []),
  ];

  const handleLogout = () => {
    deleteCookie("user");
    setUser(null);
  };

  if (pathname.match(/^\/admin(\/.*)?$/)) {
    return null;
  }

  return (
    <div className={`${isScrolled ? "bg-slate-950 text-gray-50 sticky top-0" : "bg-slate-50 text-gray-950"} z-50 shadow-md border-b`}>
      <div className="container md:mx-auto mx-2 ">
        <div className="py-5 px-2 flex justify-between items-center w-full rounded-md">
          <div className="cursor-pointer">
            <Link href="/" className="text-lg font-bold">
              Logo
            </Link>
          </div>

          <div className="lg:hidden absolute top-4 right-4">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled? 'text-gray-50': 'text-gray-950'}text-gray-950 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${isMobileMenuOpen
                ? "fixed inset-0 z-50 bg-gray-800 text-white flex flex-col px-10 gap-4 pt-10"
                : "hidden"
              } lg:flex lg:space-x-4`}
          >
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className=" flex gap-4 lg:flex-row flex-col items-center">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path} className="">
                  {link.name}
                </Link>
              ))}
              {user ? (
                <button
                  className="text-white bg-red-500"
                  onClick={handleLogout}
                >
                  <LogOutIcon className="text-2xl" />
                </button>
              ) : (
                <Link href="/auth" className="">
                  Login
                </Link>
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
