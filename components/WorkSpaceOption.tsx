"use client";
import { Ellipsis } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allNav as options } from "@/app/page";
import { SelectWorkspace } from "./SelectWorkspace";

export function WorkSpaceOption() {
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
    <div className="relative">
      <div onClick={handleClick}>
        <Ellipsis color="white" className="cursor-pointer" />
      </div>

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef} // Attach the ref to the dropdown
            className="absolute mx-4 mt-1 w-fit bg-white border rounded-lg shadow-lg top-8 right-0 z-20"
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
            <ul className="flex justify-start">
              <div className="py-2">
                <li className="w-full">
                  <SelectWorkspace />
                </li>
                {options.map((option, i) => {
                  return (
                    <li
                      key={i}
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div
                        className={`mx-4 flex items-center cursor-pointer rounded-lg transition-colors duration-300 ease-in-out gap-4`}
                      >
                        <span className="font-semibold text-md text-gray-800">
                          Foo inc.
                        </span>
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
