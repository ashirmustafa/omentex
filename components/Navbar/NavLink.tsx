import Link from "next/link";

interface NavLinkProps {
  label: string;
  path: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, path, className }) => {
  return (
    <>
      <Link
        href={path}
        className={
          `text-lg relative after:bg-secondary text-[#999999] hover:text-secondary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${className}`
        }
      >
        {label}
      </Link>
    </>
  );
};

export default NavLink;
