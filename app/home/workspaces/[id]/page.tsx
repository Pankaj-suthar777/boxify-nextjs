"use client";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Ellipsis } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const Workspace = () => {
  const { id } = useParams();
  return (
    <div
      className="h-[calc(100vh-57.6px)] w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(/images/${id}.jpg)` }}
    >
      <div className="w-full h-[70px] bg-slate-900 bg-opacity-50 flex justify-between items-center px-8">
        <p className="font-bold text-white text-xl">My Board</p>
        <Ellipsis color="white" className="cursor-pointer" />
      </div>
      <div className="px-4 overflow-auto h-[calc(100vh-127.6px)] w-screen">
        <div className="flex items-start justify-between mb-2">
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Workspace;
