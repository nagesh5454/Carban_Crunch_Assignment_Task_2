import React from "react";

const stats = [
  {
    value: "98%",
    color: "bg-gray-800 text-white",
    description: "Of CEOs Agree Sustainability Is Their Responsibility",
  },
  {
    value: "3X",
    color: "bg-green-500 text-black",
    description: "ESG High Performers Deliver A Higher Total Shareholder Return",
  },
  {
    value: "37%",
    color: "bg-gray-100 text-green-600",
    description: "Of The World’s Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",
  },
  {
    value: "18%",
    color: "bg-gray-800 text-white",
    description: "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",
  },
];

const StatsSection = () => {
  return (
    <section className="px-6 md:px-16 py-10 bg-white flex flex-wrap justify-center gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`w-[280px] p-6 rounded-md shadow-sm ${item.color}`}
        >
          <h2 className="text-3xl font-extrabold mb-2">{item.value}</h2>
          <p className="text-sm leading-snug">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
