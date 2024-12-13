import { useLocation } from "@solidjs/router";
import clsx from "clsx";
import { Component, JSX } from "solid-js";

type Props = { href: string; children: JSX.Element };

const MenuItem: Component<Props> = ({ href, children }) => {
  const location = useLocation();
  const isActive = href === location.pathname;
  console.info(`:: location.pathname`, location.pathname)
  return (
    <li
      class={clsx(`border-b-2 mx-1.5 sm:mx-6`, {
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
    <nav class="bg-sky-500 shadow-md">
      <ul class="container flex items-center p-3 text-gray-200">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/spending">Spending</MenuItem>
        <MenuItem href="/fund-info">Fund Info</MenuItem>
        <MenuItem href="/allocation">Allocation</MenuItem>
      </ul>
    </nav>
  );
}
