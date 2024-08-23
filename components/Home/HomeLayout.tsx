import Image from "next/image";
import Link from "next/link";
import FloatingScrollButton from "../FloatingScrollButton";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen h-full bg-black 2xl:px-20 xl:px-14 md:px-10 px-3 relative">
      <div className="max-w-[1760px] w-full mx-auto">{children}</div>
      <Link
        href="#services"
        className="absolute bottom-5 right-[50%] text-white"
      >
        <FloatingScrollButton />
      </Link>
    </div>
  );
};

export default HomeLayout;
