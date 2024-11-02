import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectWorkspace } from "../SelectWorkspace";
import { Box } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
        <Link href={"/home/dashboard"}>
          <div className="flex gap-2 items-center cursor-pointer">
            <Box size={32} />
            <span className="text-2xl font-bold text-black dark:text-white">
              Boxify
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center">
          <SelectWorkspace />
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      {/* mobile navbar */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
        <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-2xl font-bold text-violet-600 dark:text-gray-100"
              href="https://tailwindflex.com/"
            >
              TailwindFlex
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
