import { SidebarItem } from "@/components/layout/SidebarItem";
import type { Metadata } from "next";
import { allNav } from "../page";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 w-full h-full justify-center">
      <div className="flex max-w-7xl w-full h-full">
        {/* Sidebar - 30% width and full height */}
        <div className="w-[30%] h-full flex-shrink-0 overflow-auto p-4">
          <div className="flex justify-between items-center py-4">
            <span className="font-semibold text-slate-700">Workspaces</span>
            <div>
              <Plus size={20} color="#334155" />
            </div>
          </div>
          <div className="relative">
            {allNav.map((n, i) => (
              <SidebarItem key={i} text={n.name} active={false} />
            ))}
          </div>
        </div>

        {/* Main content - 70% width and full height */}
        <div className="w-[70%] h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
