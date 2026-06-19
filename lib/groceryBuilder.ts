export function buildGrocery(meals: any[]) {
  const map: Record<string, number> = {};

  meals.forEach((m) => {
    m.ingredients.forEach((i: string) => {
      map[i] = (map[i] || 0) + 1;
    });
  });

  return map;
}