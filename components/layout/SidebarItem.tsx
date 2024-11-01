"use client";
import {
  Activity,
  Building2,
  ChevronDown,
  PanelsLeftBottom,
  Receipt,
  Settings,
} from "lucide-react";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import necessary components from Framer Motion
import { cn } from "@/lib/utils";

interface ItemProps {
  text: string;
  active?: boolean;
}

const workplacesOptions = [
  {
    icon: <PanelsLeftBottom size={20} color="#475569" />,
    text: "Board",
  },
  {
    icon: <Activity size={20} color="#475569" />,
    text: "Activity",
  },
  {
    icon: <Settings size={20} color="#475569" />,
    text: "Settings",
  },
  {
    icon: <Receipt size={20} color="#475569" />,
    text: "Billing",
  },
];

export function SidebarItem({ text, active }: ItemProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`rounded-full md:w-full w-fit flex items-center py-2 font-medium cursor-pointer transition-colors group justify-between ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : ""
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="flex items-center">
          <Building2
            className="bg-violet-600 p-2 rounded-md box-content"
            size={24}
            color="white"
          />
          <span className="text-lg font-semibold ml-3">{text}</span>
        </div>
        <div>
          <ChevronDown
            size={20}
            className={cn({ "rotate-180": openMenu }, "duration-300")}
          />
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="overflow-hidden" // Hide overflow to prevent scrollbar
            initial={{ height: 0, opacity: 0 }} // Initial state
            animate={{ height: "auto", opacity: 1 }} // Animate to
            exit={{ height: 0, opacity: 0 }} // Exit animation
            transition={{ duration: 0.2 }}
          >
            <div className="py-2">
              {workplacesOptions.map((w, i) => (
                <WorkspacesBlock key={i} {...w} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const WorkspacesBlock = ({ icon, text }: { text: string; icon: ReactNode }) => {
  return (
    <div className="px-8 flex gap-2 hover:bg-slate-100 p-2 duration-200 cursor-pointer rounded-md items-center">
      {icon}
      <span className="font-semibold text-sm text-[#475569]">{text}</span>
    </div>
  );
};
