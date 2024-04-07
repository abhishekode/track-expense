"use client";
import { useGlobalUser } from "@/context/UserContext";
import { loginUser } from "@/services/api.method";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useRouter } from 'next/navigation'


interface AppState {
  email?: string;
  password?: string;
}

const initialState: AppState = {
  email: "",
  password: "",
};
function Login() {
  const [state, setState] = useState<AppState>(initialState);
  const [isPassword, setIsPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {setUser} = useGlobalUser();
  const router = useRouter()


  const togglePassword = () => {
    setIsPassword(!isPassword);
  };

  const [formErrors, setFormErrors] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = state;
    let errors: AppState = {};
    
    if (!email || email.trim() === "") {
      errors.email = "email is required";
    }
    if (!password || password.trim() === "") {
      errors.password = "Password is required";
    }
    setFormErrors((old: any) => ({ ...old, errors }));
    return Object.keys(errors).length === 0;
  };

  const onLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      try {
        console.log("data", state);
        const data = {
          email: state.email || "",
          password: state.password || "",
        };
        const res = await loginUser(data);
        if(res.status){
          setCookie("user", JSON.stringify(res.result));
          setUser(res.result);
          router.push('/');
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section className="text-gray-800 border">
        <div className="w-full px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold sm:text-7xl uppercase text-slate-800">
              Login <br /> here!
            </h1>
            <p className="mt-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
            onSubmit={onLogin}
          >
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  name="email"
                  autoComplete="off"
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <AiOutlineMail />
                </span>
              </div>
              <div className=" text-red-500 text-sm mt-1 first-letter:uppercase">
                {formErrors?.errors?.email && (
                  <span>{formErrors?.errors?.email}</span>
                )}
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type={isPassword ? "text" : "password"}
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer">
                  {isPassword ? (
                    <BsEye onClick={togglePassword} />
                  ) : (
                    <BsEyeSlash onClick={togglePassword} />
                  )}
                </span>
              </div>
              <div className=" text-red-500 text-sm mt-1 first-letter:uppercase">
                {formErrors?.errors?.password && (
                  <span>{formErrors?.errors?.password}</span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <button
                type="submit"
                className="w-full px-8 py-3 uppercase font-medium text-white bg-teal-700 rounded-lg"
              >
                {isLoading ? "Login....." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
