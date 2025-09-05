// components/commons/MaskedInput.tsx
"use client";

import { useState } from "react";

interface MaskedInputProps {
  type: "price" | "km" | "year";
  placeholder: string;
  value: string | number | undefined;
  onChange: (value: number | undefined) => void;
  className?: string;
}

const masks = {
  price: {
    regex: /^[0-9]*$/,
    format: (value: string) => {
      const num = value.replace(/\D/g, "");
      return num ? parseInt(num).toLocaleString("pt-BR") : "";
    },
    parse: (value: string) => {
      const num = value.replace(/\D/g, "");
      return num ? parseInt(num) : undefined;
    },
  },
  km: {
    regex: /^[0-9]*$/,
    format: (value: string) => {
      const num = value.replace(/\D/g, "");
      return num ? parseInt(num).toLocaleString("pt-BR") : "";
    },
    parse: (value: string) => {
      const num = value.replace(/\D/g, "");
      return num ? parseInt(num) : undefined;
    },
  },
  year: {
    regex: /^[0-9]{0,4}$/,
    format: (value: string) => value,
    parse: (value: string) => {
      const num = value.replace(/\D/g, "");
      return num && num.length === 4 ? parseInt(num) : undefined;
    },
  },
};

export default function MaskedInput({
  type,
  placeholder,
  value,
  onChange,
  className,
}: MaskedInputProps) {
  const [displayValue, setDisplayValue] = useState(
    value !== undefined && value !== ""
      ? masks[type].format(value.toString())
      : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Aplicar regex para validar
    if (masks[type].regex.test(inputValue.replace(/\D/g, ""))) {
      const formattedValue = masks[type].format(inputValue.replace(/\D/g, ""));
      setDisplayValue(formattedValue);

      // Enviar valor numérico para o parent
      const parsedValue = masks[type].parse(inputValue.replace(/\D/g, ""));
      onChange(parsedValue);
    }
  };

  const handleBlur = () => {
    // Formatar melhor no blur
    if (displayValue && type === "price") {
      setDisplayValue(
        parseInt(displayValue.replace(/\D/g, "")).toLocaleString("pt-BR")
      );
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={className}
    />
  );
}
