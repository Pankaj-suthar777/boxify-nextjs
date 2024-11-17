"use client";
import { X } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./custom/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import clsx from "clsx";

type ClassNameType = React.HTMLAttributes<HTMLElement>["className"];

export function CreateWorkspace({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setText("");
  };

  // Handle click outside to close dropdown
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setText("");
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div onClick={handleClick}>{children}</div>

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef} // Attach the ref to the dropdown
            className={clsx(
              "absolute mx-4 mt-1 md:w-[400px] w-[90vw] bg-white border rounded-lg shadow-lg top-14 md:left-40 inset-0 z-10 h-fit",
              className
            )}
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
            <div className="p-4 flex gap-4 flex-col relative">
              <div className="flex justify-center items-center">
                <span className="text-lg font-bold">Create Workspace</span>
                <X
                  className="absolute right-4 top-5 cursor-pointer"
                  size={18}
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-semibold text-sm">Workspace title</Label>
                <Input
                  className="w-full"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-400">
                Create
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
