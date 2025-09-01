import { Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/estoque",
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
    href: "/favorito",
    name: "Favorito",
  },
  {
    href: "/contato",
    name: "Contato",
  },
];

const Header = () => {
  return (
    <header className="shadow-md bg-white py-4">
      <div className="mx-auto max-w-7xl w-full px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/auto-car-short-logo.png"
            width={84}
            height={71}
            alt="Auto Car"
          />
        </Link>
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-one">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 text-gray-one">
          <Search />
          <Heart />
        </div>
      </div>
    </header>
  );
};

export default Header;
