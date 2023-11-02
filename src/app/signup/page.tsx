"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const [user, setUser] = useState({ email: "", username: "", password: "" });
  const router = useRouter();
  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
      toast.success("User Created Succesfully");
      router.push("/login");
    } catch (error) {
      console.log("Something is wrong!", error);
      toast.error("Something is Wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 p-5">
      <div className="h-[500px] w-[400px] text-lg bg-grey-400 flex flex-col bg-slate-900 items-center text-white justify-center rounded-lg">
        <h1 className="text-3xl pb-10">SignUp</h1>
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
        <label htmlFor="username">Username</label>
        <input
          className="px-4 py-2 my-2 rounded-lg text-black bg-slate-100"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="username"
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
        <button
          className="bg-sky-400 px-6 py-2 rounded-md my-2"
          onClick={onSignup}
        >
          Submit
        </button>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
