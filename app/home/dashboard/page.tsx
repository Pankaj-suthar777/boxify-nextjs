import { Separator } from "@/components/ui/separator";
import { Building2, CircleHelp, CreditCard, User2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { CreateWorkspaceDialog } from "@/components/CreateWorkspaceDialog";

const HomeScreen = () => {
  return (
    <div className="px-4 py-8 min-h-[80vh]">
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
          <User2 size={28} color="#1e293b" />
          <span className="font-semibold text-2xl text-slate-800">
            Your boards
          </span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((ig) => (
            <Link href={"/home/workspaces/" + ig} key={ig}>
              <img
                alt=""
                src={`/images/${ig}.jpg`}
                className={"h-full w-full object-cover aspect-video rounded-md"}
              />
            </Link>
          ))}
          <CreateWorkspaceDialog>
            <div className="w-full h-full aspect-video rounded-md bg-slate-100 flex justify-center items-center relative cursor-pointer">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleHelp
                      color="#475569"
                      size={16}
                      className="absolute bottom-2 right-2 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Free Workspaces can have up to 5 open boards. For
                      unlimited boards, upgrade with Workspace.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex justify-center flex-col items-center h-full w-full aspect-video rounded-md">
                <p className="text-sm text-slate-600 font-semibold">
                  Create new board
                </p>
                <p className="text-xs text-slate-600 font-semibold">
                  1 remaining
                </p>
              </div>
            </div>
          </CreateWorkspaceDialog>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
