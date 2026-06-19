"use client";

import { useState } from "react";

interface Recipe {
  id: string;
  name: string;
  calories: number;
  protein: number;
  ingredients: string[];
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer border border-white/10 hover:border-emerald-400/50">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
        <div className="flex gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-400">Calories</span>
            <span className="text-emerald-400 font-semibold">{recipe.calories}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Protein</span>
            <span className="text-emerald-400 font-semibold">{recipe.protein}g</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-4"></div>

      {/* Ingredients */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-sm font-semibold text-gray-300">
            Ingredients ({recipe.ingredients.length})
          </span>
          <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx} className="text-sm text-gray-400 flex items-center">
                <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Button */}
      <button className="w-full mt-4 bg-emerald-400 text-black py-2 rounded-lg font-semibold hover:bg-emerald-500 transition-colors">
        Add to Plan
      </button>
    </div>
  );
}