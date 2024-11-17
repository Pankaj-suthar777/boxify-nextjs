import { Separator } from "@/components/ui/separator";
import RecentActivityBlock from "@/components/workspace/activity/RecentActivityBlock";
import { Building2, CreditCard } from "lucide-react";

const WorkspacePage = () => {
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
      <div className="md:mx-8">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, i) => (
            <RecentActivityBlock key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
