import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import moment from "moment";

const RecentActivityBlock = () => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <p className="font-semibold">pankaj suthar</p>
          <p className="text-slate-500">created a &quot;Todo&quot;</p>
        </div>
        <div>
          <p className="text-xs text-slate-600">
            {moment(new Date()).format("lll")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityBlock;
