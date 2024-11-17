"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectWorkspace } from "../SelectWorkspace";
import { Box, Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Sidebar from "./Sidebar";
const Header = () => {
  const { data: session } = useSession();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="relative border-b-2 justify-center items-center flex w-screen">
        <nav className="px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-600 w-full max-w-7xl ">
          <Link href={"/home/dashboard"}>
            <div className="flex gap-2 items-center cursor-pointer">
              <Box size={32} />
              <span className="text-2xl font-bold text-black dark:text-white">
                Boxify
              </span>
            </div>
          </Link>
          <div className="flex lg:hidden" onClick={() => setShowSidebar(true)}>
            <Menu />
          </div>
          <div className="hidden lg:flex items-center">
            <SelectWorkspace />
            <div>
              <Avatar>
                <AvatarImage
                  src={
                    session?.user?.image
                      ? session?.user?.image
                      : "https://github.com/shadcn.png"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
