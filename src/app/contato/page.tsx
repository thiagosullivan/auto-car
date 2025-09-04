import React from "react";
import FormContactPage from "../_components/formContactPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <div className="flex gap-6">
        <div className="flex-3">
          <FormContactPage />
        </div>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Dados de contato</CardTitle>
          </CardHeader>
          <CardContent>
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
              <div className="flex items-start gap-x-2">
                <FiClock size={20} />
                <p>
                  Seg - Sex | 09h - 18h <br /> Sab | 09h - 12h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
