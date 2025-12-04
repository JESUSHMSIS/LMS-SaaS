"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
const HomePage = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="flex gap-2 flex-col items-center justify-center h-screen">
      <h1 className="text-3xl bold ">{counter}</h1>

      <Button onClick={handleIncrement}>click me!!</Button>

      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default HomePage;
