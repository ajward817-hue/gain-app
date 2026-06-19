"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import { calories, protein } from "@/lib/coach";
import { generateDay } from "@/lib/dayBuilder";
import { useUser } from "@/lib/useUser";

export default function Day() {
  const user = useUser();
  const [day, setDay] = useState<any>(null);

  const profile = {
    weight: 160,
    goal: "bulk",
  };

  const run = () => {
    const target = calories(profile.weight, profile.goal);
    const result = generateDay(target);
    setDay(result);
  };

  return (
    <AppShell>
      <div className="p-8">
        <button
          onClick={run}
          className="bg-emerald-400 text-black px-6 py-3 rounded-full"
        >
          Generate Day
        </button>

        {day && (
          <div className="mt-6">
            {day.meals.map((m: any) => (
              <div key={m.id} className="p-4 bg-white/5 mt-3 rounded-xl">
                {m.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}