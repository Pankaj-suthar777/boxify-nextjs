import { allNav } from "@/app/page";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { CreateWorkspace } from "../CreateWorkspace";
import { Plus } from "lucide-react";
import { CreateWorkspaceDialog } from "../CreateWorkspaceDialog";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="lg:hidden">
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#000000] bg-opacity-50 top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[300px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgba(34_41_47_/_5% transition-all ${
          showSidebar ? "left-0" : "-left-[300px] lg:left-0"
        }`}
      >
        <div className="relative p-4 w-full">
          <div className="flex justify-between items-center py-4">
            <span className="font-semibold text-slate-700">Workspaces</span>
            <div>
              <CreateWorkspaceDialog>
                <Plus
                  size={20}
                  color="#334155"
                  className=" box-content cursor-pointer hover:bg-slate-200"
                />
              </CreateWorkspaceDialog>
            </div>
          </div>
          {allNav.map((n, i) => (
            <SidebarItem key={i} text={n.name} active={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
