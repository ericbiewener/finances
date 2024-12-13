"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FCC } from "../../types/react";

const MenuItem: FCC<{ href: string }> = ({ href, children }) => {
  const isActive = href === usePathname();

  return (
    <li
      className={clsx(`border-b-2 mx-1.5 sm:mx-6`, {
        "border-sky-600": isActive,
        "border-transparent hover:border-sky-400": !isActive,
      })}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default function Nav() {
  return (
    <nav className="bg-sky-500 shadow-md">
      <ul className="container flex items-center p-3 text-gray-200">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/spending">Spending</MenuItem>
        <MenuItem href="/fund-info">Fund Info</MenuItem>
        <MenuItem href="/allocation">Allocation</MenuItem>
      </ul>
    </nav>
  );
}
