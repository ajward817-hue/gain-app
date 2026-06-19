"use client";

import AppShell from "@/components/AppShell";
import { useUser } from "@/lib/useUser";

export default function Home() {
  const user = useUser();

  return (
    <AppShell>
      <div className="px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">
          {user ? "Welcome back 👋" : "GAIN"}
        </h1>

        <p className="text-gray-400 mt-2">
          Build muscle. Track food. Stay consistent.
        </p>

        {!user && (
          <a
            href="/login"
            className="inline-block mt-6 bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </a>
        )}

        {user && (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <a href="/day" className="p-6 bg-white/5 rounded-2xl">
              Generate Today
            </a>
            <a href="/recipes" className="p-6 bg-white/5 rounded-2xl">
              Recipes
            </a>
            <a href="/grocery" className="p-6 bg-white/5 rounded-2xl">
              Grocery List
            </a>
            <a href="/plans" className="p-6 bg-white/5 rounded-2xl">
              Meal Plans
            </a>
          </div>
        )}
      </div>
    </AppShell>
  );
}