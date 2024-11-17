import { columns, Payment } from "@/components/workspace/settings/columns";
import { DataTable } from "@/components/workspace/settings/data-table";
import React from "react";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const page = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold">Members</h1>
      <div className="py-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
