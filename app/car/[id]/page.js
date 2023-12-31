'use client'
import React from "react";
import Navbar from "@/app/components/Navbar";
import CarDetails from "../../components/CarDetails";
import HireTrnsactions from "@/app/components/listcard/HireTrnsactions";

const CarBook = ({ params }) => {

  return (
    <div>
      <Navbar />
      <div className="pt-4 container mx-auto px-8 ">
        <div>
          <div>
            <h1 className=" font-bold text-2xl text-center">Rent Car</h1>
          </div>
          <CarDetails params={params.id} />
          <div>
            {/* <RentHistory id={params.id} /> */}
          </div>
      <div>
        <HireTrnsactions carId={params.id} />
      </div>
        </div>
      </div>
    </div>
  );
};

export default CarBook;
