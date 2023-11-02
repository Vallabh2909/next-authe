"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      toast.success("Logged In Successfully!");
      router.push(`/profile`);
    } catch (error) {
      console.log("Something is wrong!", error);
      toast.error("Something is Wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 p-5">
      <div className="h-[450px] w-[400px] text-lg bg-grey-400 flex flex-col bg-slate-900 items-center text-white justify-center rounded-lg">
        <h1 className="text-3xl pb-10">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 my-2 rounded-lg text-black bg-slate-100"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="px-4 py-2 my-2 rounded-lg text-black bg-slate-100 focus:outline-none focus:border-gray-600"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        />
        <Link href="/forgotpassword" className="text-sky-500">
          Forgot Password??
        </Link>
        <button
          className="bg-sky-400 px-6 py-2 rounded-md my-2"
          onClick={onLogin}
        >
          Submit
        </button>
        <Link href="/signup">SignUp</Link>
      </div>
    </div>
  );
};

export default LoginPage;
