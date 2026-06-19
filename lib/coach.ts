export function calories(weight: number, goal: string) {
  let base = weight * 14;

  if (goal === "bulk") base += 300;
  if (goal === "cut") base -= 400;

  return Math.round(base);
}

export function protein(weight: number) {
  return Math.round(weight * 0.9);
}