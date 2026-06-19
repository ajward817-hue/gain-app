import Link from "next/link";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex gap-6 p-4 border-b border-white/10">
        <Link href="/">Home</Link>
        <Link href="/day">Day</Link>
        <Link href="/cookbook">Cookbook</Link>
        <Link href="/login">Login</Link>
      </div>

      {children}
    </div>
  );
}