"use client";
import {
  Activity,
  Building2,
  ChevronDown,
  PanelsLeftBottom,
  Settings,
} from "lucide-react";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface ItemProps {
  text: string;
  id: number;
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
  // {
  //   icon: <CreditCard size={20} color="#475569" />,
  //   text: "Billing",
  // },
];

export function SidebarItem({ text, id }: ItemProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [workspaceId] = useState(id);
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      <div
        className={`rounded-full w-full flex items-center py-2 font-medium cursor-pointer transition-colors group justify-between`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="flex items-center">
          <Building2
            className="bg-violet-600 p-2 rounded-md box-content"
            size={24}
            color="white"
            onClick={() => {
              console.log("workspaceId", workspaceId);
            }}
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
              {workplacesOptions.map((w, i) => {
                const isActive =
                  pathname === "/dashboard/" + id + "/" + w.text.toLowerCase();
                console.log(
                  pathname,
                  "||",
                  "/dashboard/" + id + "/" + w.text.toLowerCase()
                );
                return (
                  <WorkspacesBlock
                    active={isActive}
                    id={workspaceId}
                    key={i}
                    {...w}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const WorkspacesBlock = ({
  icon,
  text,
  id,
  active,
}: {
  text: string;
  icon: ReactNode;
  id: number;
  active: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "px-8 flex gap-2 hover:bg-slate-100 p-2 duration-200 cursor-pointer rounded-md items-center",
        { "bg-slate-100": active }
      )}
      onClick={() => {
        const route = text.toLowerCase();
        router.push("/dashboard/" + id + "/" + route);
      }}
    >
      {icon}
      <span className="font-semibold text-sm text-[#475569]">{text}</span>
    </div>
  );
};
