"use client";
import * as React from "react";
import { Button } from "./custom/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CreateWorkspaceDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text, setText] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-center">
            Create board
          </DialogTitle>
          <DialogDescription>
            <div className="p-4 flex gap-4 flex-col relative">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((ig) => (
                    <img
                      alt=""
                      key={ig}
                      src={`/images/${ig}.jpg`}
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
