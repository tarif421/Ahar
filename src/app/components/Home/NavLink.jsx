"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  const isActive = href === "/" ? path === href : path.startsWith(href);

  return (
    <Link
      className={`${isActive ? "text-primary font-semibold" : "text-base-content"} font-medium transition-colors`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
