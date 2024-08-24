import Link from "next/link";
import FloatingScrollButton from "./FloatingScrollButton";

interface HeroSectionLayoutProps {
  children: React.ReactNode;
  scrollHref: string;
}

const HeroSectionLayout: React.FC<HeroSectionLayoutProps> = ({
  children,
  scrollHref,
}) => {
  // bg-[#fffff2ff2]
  return (
    <div className="min-h-screen h-full bg-primary 2xl:px-20 xl:px-14 md:px-10 px-3 relative">
      <div className="max-w-[1760px] w-full mx-auto">{children}</div>
      <Link
        href={scrollHref}
        className="absolute bottom-5 right-[50%] text-secondary"
      >
        <FloatingScrollButton />
      </Link>
    </div>
  );
};

export default HeroSectionLayout;
