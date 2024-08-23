import Image from "next/image";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen h-full bg-black 2xl:px-20 xl:px-14 md:px-10 px-3">
      <div className="max-w-[1760px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default HomeLayout;
