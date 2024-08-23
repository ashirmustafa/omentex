import Image from "next/image";

const HeroLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen bg-black 2xl:px-20 xl:px-14 md:px-10 px-3 relative">
      <Image
        alt="blob"
        src="/blob.svg"
        width={300}
        height={200}
        className="absolute -top-40 xl:-left-0 lg:-left-11 md:-left-11 -left-16 rotate-180 opacity-80 select-none"
        draggable={false}
      />
      {children}
    </div>
  );
};

export default HeroLayout;
