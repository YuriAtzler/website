"use client";

import { NavBarType } from "@/types/components/nav-bar.type";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export function NavBar({ links }: NavBarType) {
  return (
    <Navbar isBlurred className="fixed bg-graydark-2/50 text-white">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link) => (
          <NavbarItem key={link}>
            <Link color="foreground" href={`#${link}`} className="text-white">
              {link}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="shadow" size="sm">
            Budget
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
