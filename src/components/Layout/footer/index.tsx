'use client'
import { ourCoursedData } from "@/components/Common/Jsondata";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import ToggleTheme from "../ToogleTheme";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.match(/^\/admin(\/.*)?$/)) {
    return null;
  }
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white lg:grid lg:grid-cols-5 relative">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/assets/library.jpg"
          alt="footer"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 text-gray-700">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium uppercase">Crystal Pathshala</h2>
            <address>
              <a target="_blank"
                href="http://maps.google.com/?q=Crystal Pathshala, Chahat complex, Sector-15 , Noida, Uttar Pradesh"
                rel="noopener noreferrer"
                referrerPolicy='no-referrer'
              >
                1st floor, Chahat complex, Sector-15 , Noida, Uttar Pradesh
              </a>
            </address>
            <div className="mt-5 ">
              <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>
              <div className="flex items-center gap-4">
                <a href="tel:+917503846834" className="block font-medium text-gray-900 hover:opacity-75">+91 7503846834</a>
                <a href="tel:+917982398424" className="block font-medium text-gray-900 hover:opacity-75">+91 7982398424</a>
              </div>
            </div>


            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 9am - 8pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>


            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <FaFacebook className="text-3xl" />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <FaInstagram className="text-3xl" />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <FaXTwitter className="text-3xl" />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <FaYoutube className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Our courses</p>

              <ul className="mt-6 space-y-4 text-sm">
                {ourCoursedData.map((course) => (
                  <li key={course.id}>
                    <Link href={course.link} className="text-gray-700 transition hover:opacity-75"> {course.title} </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> About </a>
                </li>

                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                </li>

                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                </li>
                <li>
                  <ToggleTheme />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
              </li>

              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
              </li>

              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; {currentYear}. Crystal Pathshala. All rights reserved.
            </p>
          </div>
        </div>
        <div className="fixed right-4 bottom-4 lg:bottom-10 lg:right-10 z-50">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+917503846834&text=Hello%2C%20Sir!%20I%20hope%20you%20are%20doing%20well.%20I%20have%20a%20question%20regarding%20our%20Spoken%20English%20and%20Professional%20Skills%20training%20programs.%20Could%20you%20please%20provide%20more%20information%20about%20them?"
            rel="noopener noreferrer"
            referrerPolicy='no-referrer'
          >
            <FaWhatsapp className="text-5xl text-[#22CC66]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
