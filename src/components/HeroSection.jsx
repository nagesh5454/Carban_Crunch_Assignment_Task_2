// import React from "react";
// import heroImage from "../assets/hero_image.jpeg"; // adjust path if needed

// const HeroSection = () => {
//   return (
//     <section className="w-full px-6 md:px-16 py-16 md:flex items-center justify-between bg-white">
//       {/* Left Content */}
//       <div className="md:w-1/2 space-y-6">
//         <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
//           🌱 Let’s Save our Environment
//         </span>

//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//           Optimize your eco <br /> reporting with
//         </h1>

//         <h2 className="inline-block text-white text-2xl font-bold px-6 py-3 bg-orange-400 rounded-full">
//           CARBON CRUNCH
//         </h2>

//         <p className="text-gray-700 text-base">
//           <span className="text-green-600 font-semibold">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
//         </p>

//         {/* Buttons */}
//         <div className="flex space-x-4 pt-2">
//           <button className="px-5 py-2 bg-white border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-50">
//             Free Calculator
//           </button>
//           <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
//             Book Demo
//           </button>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//         <img
//           src={heroImage}
//           alt="Green Earth"
//           className="w-full max-w-md md:max-w-xl rounded-xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImage1 from "../assets/hero_image.jpeg";
import heroImage2 from "../assets/hero_image1.jpg";
import heroImage3 from "../assets/hero_image3.jpeg";

const HeroSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
          🌱 Let’s Save our Environment
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Optimize your eco <br /> reporting with
        </h1>

        <h2 className="inline-block text-white text-2xl font-bold px-6 py-3 bg-orange-400 rounded-full">
          CARBON CRUNCH
        </h2>

        <p className="text-gray-700 text-base">
          <span className="text-green-600 font-semibold">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pt-2">
          <button className="px-5 py-2 bg-white border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-50">
            Free Calculator
          </button>
          <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
            Book Demo
          </button>
        </div>
      </div>

      {/* Right Slider with Larger Images and 8s Delay */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 8000, disableOnInteraction: false }} // 8 seconds delay
          loop={true}
          className="w-full max-w-2xl h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl shadow-xl"
        >
          {[heroImage1, heroImage2, heroImage3].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
