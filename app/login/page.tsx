"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await supabase.auth.signInWithOtp({ email });
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <input
        className="w-full p-3 bg-white/5"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={login}
        className="mt-4 bg-emerald-400 text-black px-4 py-2 rounded-full"
      >
        Login
      </button>
    </div>
  );
}