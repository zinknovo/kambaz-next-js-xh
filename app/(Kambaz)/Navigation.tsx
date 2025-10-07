'use client';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaCircleUser,
  FaGauge,
  FaBook,
  FaCalendarDays,
  FaInbox,
  FaFlask,
} from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const links = [
    { name: "Account", href: "/Account", icon: FaCircleUser },
    { name: "Dashboard", href: "/Dashboard", icon: FaGauge },
    { name: "Courses", href: "/Courses", icon: FaBook },
    { name: "Calendar", href: "/Calendar", icon: FaCalendarDays },
    { name: "Inbox", href: "/Inbox", icon: FaInbox },
    { name: "Labs", href: "/Labs", icon: FaFlask },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <br />
      {links.map((link) => {
        const isActive = isMounted && pathname.startsWith(link.href);

        let iconColorClass;
        if (link.name === "Account") {
          iconColorClass = "text-secondary"; // Keep gray as specifically requested
        } else {
          iconColorClass = "text-danger";    // Set other icons to red as per checklist
        }

        const textColorClass = isActive ? "text-danger" : "text-white";
        const bgColorClass = isActive ? "bg-white" : "bg-black";

        return (
          <div key={link.name}>
            <ListGroupItem className={`border-0 text-center ${bgColorClass}`}>
              <Link
                href={link.href}
                id={`wd-${link.name.toLowerCase()}-link`}
                className={`text-decoration-none ${textColorClass}`}
              >
                <link.icon className={`fs-1 ${iconColorClass}`} />
                <br />
                {link.name}
              </Link>
            </ListGroupItem>
            <br />
          </div>
        );
      })}
    </ListGroup>
  );
}