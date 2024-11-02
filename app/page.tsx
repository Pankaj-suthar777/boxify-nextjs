import { Button } from "@/components/ui/button";
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-slate-200">
      <Button>Hi there!</Button>
    </div>
  );
};

export default LandingPage;

export const allNav = [
  { id: Math.floor(Math.random() * 100), name: "mycc" },
  { id: Math.floor(Math.random() * 100), name: "mysccc" },
  { id: Math.floor(Math.random() * 100), name: "myasccc" },
];
