"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { useUser } from "@/lib/useUser";

type FilterType = "all" | "bulk" | "cut" | "high-protein";

export default function Cookbook() {
  const user = useUser();
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "all") return matchesSearch;
    if (filter === "bulk") return matchesSearch && recipe.calories >= 600;
    if (filter === "cut") return matchesSearch && recipe.calories <= 600;
    if (filter === "high-protein") return matchesSearch && recipe.protein >= 40;

    return matchesSearch;
  });

  return (
    <AppShell>
      <div className="px-8 py-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Cookbook</h1>
        <p className="text-gray-400 mb-8">Browse and filter recipes by nutrition</p>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {[
            { label: "All", value: "all" },
            { label: "Bulk (600+ cal)", value: "bulk" },
            { label: "Cut (≤600 cal)", value: "cut" },
            { label: "High Protein (40g+)", value: "high-protein" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as FilterType)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                filter === btn.value
                  ? "bg-emerald-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No recipes found</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}