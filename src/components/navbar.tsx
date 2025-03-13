import {
  NavBarType,
  NavBarVariantsFunction,
} from "@/types/components/nav-bar.type";
import { cva } from "class-variance-authority";

const NavBarVariants: NavBarVariantsFunction = cva(
  "justify-center flex h-full px-6 backdrop-blur bg-gray-12/50",
  {
    variants: {
      style: {
        full: "w-full",
        rounded: "container rounded-lg mt-3",
      },
    },
    defaultVariants: {
      style: "full",
    },
  }
);

export function NavBar({ style = "full", links }: NavBarType) {
  return (
    <header className="flex w-full fixed z-50 items-center justify-center h-16 text-white">
      <div className={NavBarVariants({ style })}>
        <div className="container flex items-center justify-between">
          <h1>Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
