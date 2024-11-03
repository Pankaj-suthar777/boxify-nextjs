"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectWorkspace } from "../SelectWorkspace";
import { Box, Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Header = ({
  setShowSidebar,
}: {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600 ">
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
    </>
  );
};

export default Header;
