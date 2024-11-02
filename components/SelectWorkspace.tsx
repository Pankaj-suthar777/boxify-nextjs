"use client";
import { Building2, ChevronsUpDown, CreditCard, Plus } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allNav } from "@/app/page";
import { Separator } from "./ui/separator";

export function SelectWorkspace() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle click outside to close dropdown
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div
        onClick={handleClick}
        className={`mx-4 flex items-center cursor-pointer rounded-lg transition-all duration-300 
          ${
            isOpen
              ? "bg-purple-50 outline outline-[3px] outline-purple-600"
              : "hover:bg-slate-100"
          } 
          transition-colors duration-300 ease-in-out`}
      >
        <Building2
          className="bg-violet-600 p-2 rounded-lg box-content"
          size={20}
          color="white"
        />
        <div className="flex px-4 items-center">
          <span className="font-semibold text-gray-800">Foo inc.</span>
          <div className="ml-8">
            <ChevronsUpDown size={16} color="rgb(148 163 184)" />
          </div>
        </div>
      </div>

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef} // Attach the ref to the dropdown
            className="absolute mx-4 mt-1 w-[400px] bg-white border rounded-lg shadow-lg top-10 right-8 z-20"
            initial={{ opacity: 0, scale: 0.9 }} // Start with scale and opacity
            animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
            exit={{ opacity: 0, scale: 0.9 }} // Scale down and fade out
            transition={{
              duration: 0.3,
              type: "spring", // Use spring for a more natural feel
              stiffness: 300,
              damping: 25,
            }}
          >
            <ul className="">
              <li className="py-6 hover:bg-gray-100 cursor-pointer px-4">
                <div
                  className={`mx-4 flex items-center cursor-pointer rounded-lg transition-colors duration-300 ease-in-out gap-4`}
                >
                  <Building2
                    className="bg-violet-600 p-2 rounded-lg box-content"
                    size={28}
                    color="white"
                  />

                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-gray-800">
                      Foo inc.
                    </span>
                    <div className="flex gap-x-2 items-center">
                      <CreditCard size={16} color="#475569" />
                      <span className="text-xs text-slate-600">Free</span>
                    </div>
                  </div>
                </div>
              </li>
              <Separator />

              <div className="pt-4">
                {allNav.map((a, i) => {
                  return (
                    <li
                      key={i}
                      className="py-2 hover:bg-gray-100 cursor-pointer px-4"
                    >
                      <div
                        className={`mx-4 flex items-center cursor-pointer rounded-lg transition-colors duration-300 ease-in-out gap-4`}
                      >
                        <Building2
                          className="bg-violet-600 p-2 rounded-lg box-content"
                          size={20}
                          color="white"
                        />
                        <span className="font-semibold text-md text-gray-800">
                          Foo inc.
                        </span>
                      </div>
                    </li>
                  );
                })}
              </div>
              <li className="hover:bg-gray-50 cursor-pointer px-4 py-2">
                <div
                  className={`mx-4 flex items-center cursor-pointer rounded-lg transition-colors duration-300 ease-in-out gap-4`}
                >
                  <Plus
                    className="p-2 rounded-lg box-content"
                    color="#94a3b8"
                    size={20}
                  />
                  <span className="font-semibold text-md text-gray-400">
                    Create Organization
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
