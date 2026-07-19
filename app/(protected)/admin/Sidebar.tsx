"use client";

import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Link key={link.href} href={link.href}>
            <Button
              className="w-full mb-2 capitalize font-normal justify-start"
              variant={variant}
            >
              {link.label}
            </Button>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
