import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import FormContactFooter from "@/app/_components/formContactFooter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

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
    href: "/politicas",
    name: "Politicas de Privacidade",
  },
  {
    href: "/contato",
    name: "Contato",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white shadow-[0px_0px_10px_2px_#00000024]">
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <Link href="/" className="flex justify-center mb-10">
          <Image
            src="/auto-car-full-logo.png"
            alt="Auto Car"
            width={275}
            height={42}
          />
        </Link>
        <div className="flex justify-evenly gap-3">
          <div>
            <p className="font-bold text-red-one text-lg mb-6">Site</p>
            <nav>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-one text-sm hover:text-red-one"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="font-bold text-red-one text-lg mb-6">Atendimento</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-x-2">
                <FiPhoneCall size={20} />
                <p>(43) 99999-8888</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaWhatsapp size={20} />
                <p>(43) 99999-8888</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FiMail size={20} />
                <p>contato@autocar.com.br</p>
              </div>
              <div className="flex items-start gap-x-2">
                <FiMapPin size={20} />
                <p>
                  Av. Higienópolis, 999, Centro, <br />
                  Londrina - PR, 86040-100
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] w-full">
            <p className="font-bold text-red-one text-lg mb-6">Contato</p>
            <FormContactFooter />
          </div>
          <div>
            <p className="font-bold text-red-one text-lg mb-6">
              Mídias Sociais
            </p>
            <ul className="flex gap-4 mb-4">
              <li>
                <Link href="/" className="hover:text-red-one">
                  <FaFacebookF size={20} />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-one">
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-one">
                  <FaLinkedinIn size={20} />
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-one">
                  <FaYoutube size={20} />
                </Link>
              </li>
            </ul>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1831.9286653493064!2d-51.16619470503401!3d-23.320934626086558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1756732360360!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                className="w-[250px] h-[250px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-one py-2 px-4">
        <p className="text-center text-white text-sm">
          Desenvolvido por{" "}
          <Link href="/" className="font-bold">
            ATS
          </Link>{" "}
          | &copy; 2025 - <strong>Auto Car</strong> | Todos os Direitos
          Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
