"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen  bg-primary flex flex-col items-center justify-center text-secondary text-3xl">
        <h1 className="lg:text-8xl sm:text-4xl text-xl font-extrabold pb-3">Page not Found</h1>
        <div
          className="text-xl cursor-pointer font-medium underline"
          onClick={() => router.back()}
        >
          Click here to return
        </div>
      </div>
    </>
  );
};

export default NotFound;
