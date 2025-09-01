import Image from "next/image";
import React from "react";

export const visitedCarData = [
  {
    carName: "Honda Civic",
    carModel: "2.0 16v flexone exl 4p cvt",
    carImgUrl: "https://i.ibb.co/9HXkz1CR/car-visited.jpg",
  },
  {
    carName: "Honda Civic",
    carModel: "2.0 16v flexone exl 4p cvt",
    carImgUrl: "https://i.ibb.co/9HXkz1CR/car-visited.jpg",
  },
  {
    carName: "Honda Civic",
    carModel: "2.0 16v flexone exl 4p cvt",
    carImgUrl: "https://i.ibb.co/9HXkz1CR/car-visited.jpg",
  },
];

export const VisitedCarCard = () => {
  return (
    <>
      {visitedCarData.map((car, index) => (
        <div key={index} className="max-w-[215px] border-1 border-gray-300">
          <Image
            src={car.carImgUrl}
            alt={car.carName}
            width={215}
            height={160}
          />
          <div className="flex flex-col bg-white p-2 text-sm uppercase">
            <p className="font-bold">{car.carName}</p>
            <p className="text-[#929292]">{car.carModel}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const VisitedCars = () => {
  return (
    <div className="flex gap-4">
      <VisitedCarCard />
    </div>
  );
};

export default VisitedCars;
