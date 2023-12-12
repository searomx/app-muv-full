"use client";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full min-h-screen bg-slate-900">
      <Header />
      <div className="flex w-full min-h-[calc(100vh_-_4rem)] justify-center items-center bg-cyan-600">
        <h1 className="text-6xl font-bold text-white">HOME</h1>
      </div>
    </main>
  );
}
