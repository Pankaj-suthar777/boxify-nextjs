"use client";

import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SessionProvider>
        <Toaster />
        {children}
      </SessionProvider>
    </div>
  );
};

export default Providers;
