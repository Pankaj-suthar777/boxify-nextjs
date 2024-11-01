"use client";
import { Building2, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SelectWorkspace() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null); // Ref for the dropdown

  const handleClick = () => {
    setIsFocused(!isFocused);
    setIsOpen(!isOpen);
  };

  // Handle click outside to close dropdown
  const handleClickOutside = (event) => {
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
            isFocused
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
          <div className="ml-2">
            <ChevronsUpDown size={16} color="rgb(148 163 184)" />
          </div>
        </div>
      </div>

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef} // Attach the ref to the dropdown
            className="absolute mx-4 mt-1 w-48 bg-white border rounded-lg shadow-lg top-10 right-8"
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
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 3
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
