import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = [
    { name: "Client", route: "/" },
    { name: "Server", route: "/server-route" },
  ];
  return (
    <nav className="flex items-center gap-4 px-4 py-2 fixed top-5 w-fit left-1/2 -translate-x-1/2 bg-white/10 rounded-full backdrop-blur-lg border border-white/30">
      {links.map((link, i) => (
        <Link href={link.route} key={i} className="font-thin text-sm">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
