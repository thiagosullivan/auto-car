"use client";

import { ThemeToggle } from "@/app/_components/theme-toggle";
import { useTheme } from "@/hook/use-theme";
import { Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import SearchForm from "./search-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/carros",
    name: "Estoque",
  },
  {
    href: "/venda",
    name: "Venda Seu Carro",
  },
  {
    href: "/financiamento",
    name: "Financiamento",
  },
  {
    href: "/sobre-nos",
    name: "Empresa",
  },
  {
    href: "/favoritos",
    name: "Favoritos",
  },
  {
    href: "/contato",
    name: "Contato",
  },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="shadow-md bg-card py-4">
      <div className="mx-auto max-w-7xl w-full px-4 flex justify-between items-center">
        <Link href="/">
          {theme === "light" ? (
            <Image
              src="/auto-car-short-logo.png"
              width={84}
              height={71}
              alt="Auto Car"
            />
          ) : (
            <Image
              src="/auto-car-short-logo-dark.png"
              width={84}
              height={71}
              alt="Auto Car"
            />
          )}
        </Link>
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={` ${
                    pathname === link.href && "text-red-one font-semibold"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 ">
          <Popover>
            <PopoverTrigger>
              <Search />
            </PopoverTrigger>
            <PopoverContent className="w-[500px]">
              <SearchForm />
            </PopoverContent>
          </Popover>
          <Link
            href="/favoritos"
            className="hover:text-red-one p-0 bg-transparent hover:bg-transparent"
          >
            <Heart />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
