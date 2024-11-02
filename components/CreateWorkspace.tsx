"use client";
import { Plus, X } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./custom/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

export function CreateWorkspace() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setText("");
    setSelectedImage(null);
  };

  // Handle click outside to close dropdown
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setText("");
      setSelectedImage(null);
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
      <Plus
        size={20}
        color="#334155"
        onClick={handleClick}
        className="p-1.5 box-content cursor-pointer hover:bg-slate-200"
      />

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef} // Attach the ref to the dropdown
            className="absolute mx-4 mt-1 w-[400px] bg-white border rounded-lg shadow-lg top-14 left-20 z-10"
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
                <span className="text-lg font-bold">Create board</span>
                <X
                  className="absolute right-4 top-5 cursor-pointer"
                  size={18}
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ig) => (
                    <img
                      alt=""
                      key={ig}
                      src={`/images/${ig}.avif`}
                      className={cn(
                        {
                          "bg-purple-50 outline outline-4 outline-purple-600":
                            selectedImage === ig,
                        },
                        "h-full w-full object-cover aspect-video rounded-md"
                      )}
                      onClick={() => setSelectedImage(ig)}
                    />
                  ))}
                </div>
                <Label className="font-semibold text-sm">Board title</Label>
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
