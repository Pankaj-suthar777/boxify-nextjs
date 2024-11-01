import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-200">
      <Button>Hi there!</Button>
    </div>
  );
};

export default Home;

export const allNav = [
  { id: Math.floor(Math.random() * 100), name: "mycc" },
  { id: Math.floor(Math.random() * 100), name: "mysccc" },
  { id: Math.floor(Math.random() * 100), name: "myasccc" },
];
