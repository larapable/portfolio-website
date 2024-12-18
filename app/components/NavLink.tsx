import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-[#118b50] hover:underline decoration-white decoration-2 underline-offset-8"
    >
      {title}
    </Link>
  );
};

export default NavLink;
