import { Separator } from "@/components/ui/separator";
import { Building2, CreditCard, User2 } from "lucide-react";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="px-4 py-8">
      <div>
        <div
          className={`mx-4 flex items-center cursor-pointer rounded-lg transition-colors duration-300 ease-in-out gap-4`}
        >
          <Building2
            className="bg-violet-600 p-3 rounded-lg box-content"
            size={44}
            color="white"
          />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl text-gray-800">Foo inc.</span>
            <div className="flex gap-x-2 items-center">
              <CreditCard size={16} color="#475569" />
              <span className="text-xs text-slate-600">Free</span>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4 mx-4" />
      <div className="mx-8">
        <div className="flex gap-2 items-center">
          <User2 size={28} />
          <span className="font-semibold text-2xl">Your boards</span>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[1, 2, 3, 4].map((ig) => (
            <img
              alt=""
              key={ig}
              src={`/images/${ig}.avif`}
              className={"h-full w-full object-cover aspect-video rounded-md"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
