"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({ email: "", username: "" });
  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await axios.get(`/api/users/me`);
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.log("Error fetching user details", error);
      }
    }
    getUserDetails();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl">Profile</h1>
      <div className="flex flex-col items-center justify-center">
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
          type="email"
          id="email"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="username"
        />
      </div>
    </div>
  );
};
export default ProfilePage;
