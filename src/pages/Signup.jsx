// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserToStorage } from "../utils/userStorage";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { name, email };
    saveUserToStorage(newUser);
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 transition-colors">
      <form
        onSubmit={handleSignup}
        className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Kayıt Ol
        </h2>

        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-zinc-700 text-black dark:text-white"
        />

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-zinc-700 text-black dark:text-white"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
        >
          Kayıt Ol ve Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Signup;
