"use client";
import { Button } from "@/components/custom/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const GithubSigninButton = ({ isSignin = true }: { isSignin?: boolean }) => {
  return (
    <Button
      onClick={() => signIn("github")}
      type="button"
      className="py-4 flex justify-center items-center gap-2 font-normal w-full"
    >
      <div>
        <Github size={20} />
      </div>
      Sign {isSignin ? "in " : "up "}with Github
    </Button>
  );
};

export default GithubSigninButton;
