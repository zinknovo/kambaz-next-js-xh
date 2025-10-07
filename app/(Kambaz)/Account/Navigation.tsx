'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    { name: "Signin", path: "/Account/Signin" },
    { name: "Signup", path: "/Account/Signup" },
    { name: "Profile", path: "/Account/Profile" },
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.path);
        return (
          <Link
            key={link.path}
            href={link.path}
            id={`wd-account-${link.name.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border-0`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}