import { Box, Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

interface ItemProps {
  text: string;
  active?: boolean;
}

export default function Sidebar({ children }: Props) {
  return (
    <aside
      className={`flex-col w-full h-full bg-white md:bg-transparent transition-all`}
    >
      <nav className="h-full flex flex-col">
        <Link
          href="/"
          className="no-underline text-black flex justify-center items-center py-6"
        >
          <Box className="h-8 w-8" />
          <span className="sr-only">Acme Inc</span>
          {/* Hide text on small screens */}
          <span className="ml-4 text-black font-medium text-lg hidden md:block">
            Boxify
          </span>
        </Link>
        <ul className="flex-1 md:px-3 px-1">{children}</ul>
      </nav>
    </aside>
  );
}

export function SidebarItem({ text, active }: ItemProps) {
  return (
    <Link
      href={""}
      className={`relative no-underline rounded-full md:w-full w-fit flex items-center py-3 px-3 md:px-6 my-1 font-medium 
        cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
    >
      <Building2 />
      {/* Hide the text on small screens */}
      <span
        className={`overflow-hidden transition-all ml-3 text-lg hidden md:block`}
      >
        {text}
      </span>
    </Link>
  );
}
