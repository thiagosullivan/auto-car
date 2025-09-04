import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-4">Sobre a empresa</h1>
      <div className="mb-8 text-justify">
        <p>
          Proin ac sapien dui. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque eu justo non odio porttitor ultrices sit
          amet sit amet turpis. Etiam sed est facilisis, luctus lorem sed,
          scelerisque est. Donec neque ipsum, commodo eget porttitor nec,
          bibendum ac neque. Aenean feugiat magna venenatis lorem scelerisque,
          pharetra tincidunt enim vestibulum. Curabitur cursus tincidunt ipsum,
          in varius magna. Mauris venenatis nunc nec lacus tempor varius et sit
          amet purus. Donec in vehicula nisl. Nam nec lectus ac dolor semper
          luctus eget non justo. Proin sit amet ex scelerisque nulla luctus
          faucibus eu ac risus. Pellentesque rutrum, urna ac ultricies semper,
          justo elit volutpat quam, at elementum augue leo vitae quam.
        </p>
        <br />
        <p>
          Ut et est nibh. Phasellus non nisi sit amet neque venenatis venenatis
          viverra eget sem. Ut nisi dolor, scelerisque ac eros ac, elementum
          feugiat sem. Donec vitae dolor velit. Etiam non metus porta, faucibus
          lorem in, ornare orci. Nam mollis, est a egestas facilisis, dolor ex
          tincidunt justo, eu mattis ex nunc at nibh. Nam risus massa, tincidunt
          ut vestibulum ac, iaculis ac lorem. Vestibulum iaculis tellus a
          vestibulum semper. Donec finibus accumsan tellus sit amet tincidunt.
          Praesent mollis at massa in convallis. Duis eu lectus rhoncus,
          pharetra tortor id, eleifend ipsum. Vestibulum sed elit non justo
          viverra tempor et accumsan tellus. Vivamus a mauris vitae enim posuere
          posuere.
        </p>
        <br />
        <p>
          Nam ornare, ante eget aliquam vulputate, dui ex ornare mauris, eu
          sodales turpis turpis id urna. Praesent eget lobortis tellus, sit amet
          fringilla dolor. Ut lectus mi, aliquet pretium leo a, faucibus gravida
          purus. Praesent porta purus sed leo aliquam cursus. Mauris sit amet
          orci eu arcu tristique iaculis. Morbi cursus erat diam, sit amet
          laoreet dolor tempor nec. Sed consectetur lectus id dolor dictum
          rutrum. Quisque nec tellus finibus ipsum eleifend ultricies sed in ex.
          Vestibulum egestas volutpat eros maximus feugiat.
        </p>
      </div>
      <div className="max-w-[1280px] min-h-[400px] h-full relative">
        <Image
          src="https://agencianovofoco.com.br/wp-content/uploads/2024/11/estrategias-de-marketing-digital-para-concessionarias.jpeg"
          alt="Concessonária"
          sizes="100vw"
          objectFit="cover"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
