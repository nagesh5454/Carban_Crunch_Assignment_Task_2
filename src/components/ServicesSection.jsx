import React from "react";
import middleImage from "../assets/middle.png";

const services = [
  {
    title: "GHG Accounting",
    description:
      "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.",
  },
  {
    title: "Carbon Reduction Strategy",
    description:
      "We help design tailored carbon reduction strategies using data-driven insights. From setting science-based targets to implementing low-carbon solutions, we guide you every step of the way.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold text-sm md:text-base mb-2">
          OUR SERVICES
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          What do <span className="text-orange-500">we do</span>?
        </h2>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Enlarged Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={middleImage}
            alt="Our Services"
            className="w-full max-w-[480px] md:max-w-[600px] rounded-xl"
          />
        </div>

        {/* Right Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition">
                See More Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center mt-12">
        <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xl">
          ↓
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
