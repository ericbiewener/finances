"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FCC } from "../../types/react";
import { MAIN_CENTERED_CLASS_NAME } from "./ui/constants";

const MenuItem: FCC<{ href: string }> = ({ href, children }) => {
  const isActive = href === usePathname();

  return (
    <li
      className={clsx(`border-b-2`, {
        "border-sky-600": isActive,
        "border-transparent hover:border-sky-400": !isActive,
      })}
    >
      <a href={href} className="text-white">
        {children}
      </a>
    </li>
  );
};

export default function Nav() {
  return (
    <nav className="bg-sky-500 shadow-md">
      <ul
        className={`${MAIN_CENTERED_CLASS_NAME} flex items-center py-3 gap-x-10 text-gray-200`}
      >
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/spending">Spending</MenuItem>
        <MenuItem href="/fund-info">Fund Info</MenuItem>
        <MenuItem href="/allocation">Allocation</MenuItem>
      </ul>
    </nav>
  );
}
