"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen  bg-primary flex flex-col items-center justify-center text-se text-3xl">
        <h1 className="md:text-8xl text-2xl font-semibold pb-10">OMENTEX</h1>
        <h1 className="font-thin pb-3">404: Page not Found</h1>
        <div
          className="text-sm cursor-pointer font-bold underline"
          onClick={() => router.push("/")}
        >
          Click here to return
        </div>
      </div>
    </>
  );
};

export default NotFound;
