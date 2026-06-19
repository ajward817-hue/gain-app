import { recipes } from "@/data/recipes";

export function generateDay(targetCalories: number) {
  let meals: any[] = [];
  let total = 0;

  for (const r of recipes) {
    if (total >= targetCalories) break;
    meals.push(r);
    total += r.calories;
  }

  return { meals, total };
}