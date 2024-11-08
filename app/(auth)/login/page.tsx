import { UserAuthForm } from "@/components/auth/UserAuthForm";
import { Box } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <>
        <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="z-[555] h-full flex justify-center w-full items-center">
              <Box className="h-40 w-40" />
              <span className="ml-4 text-white font-semibold text-3xl">
                Boxify
              </span>
            </div>

            {/* <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This library has saved me countless hours of work and
                  helped me deliver stunning designs to my clients faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div> */}
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-left">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email and password below <br />
                  to log into your account
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                Don&apos;t have an account{" "}
                <Link className="underline" href={"/register"}>
                  sign up?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginPage;
