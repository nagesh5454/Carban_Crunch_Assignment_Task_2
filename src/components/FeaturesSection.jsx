import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaCertificate,
  FaBrain,
  FaSyncAlt,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch size={24} />,
    title: "Automated Data Collection",
    description:
      "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    icon: <FaSyncAlt size={24} />,
    title: "Real-Time Tracking",
    description:
      "Track emissions and sustainability metrics in real time, enabling proactive decision-making and faster adjustments.",
  },
  {
    icon: <FaCertificate size={24} />,
    title: "Simplified Certification Process",
    description:
      "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
  },
  {
    icon: <FaBrain size={24} />,
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
  {
    icon: <FaRobot size={24} />,
    title: "Machine Learning Automation",
    description:
      "Use ML models to automate sustainability predictions, enabling businesses to stay ahead in their eco goals.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <p className="text-green-600 font-semibold mb-2">FEATURES</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        <span className="text-orange-500">Why</span> Carbon Crunch?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300"
          >
            <div className="text-green-500 bg-green-100 w-10 h-10 flex items-center justify-center rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
