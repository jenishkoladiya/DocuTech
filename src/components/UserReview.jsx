import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Profilepic from "../assets/Ellipse 4.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Create contracts, agreements & forms in seconds using advanced AI technology.",
      rating: 5,
    },
    {
      id: 2,
      content: "Create contracts, agreements & forms in seconds using advanced AI technology.",
      rating: 5,
    },
    {
      id: 3,
      content: "Create contracts, agreements & forms in seconds using advanced AI technology.",
      rating: 5,
    },
    {
      id: 4,
      content: "Create contracts, agreements & forms in seconds using advanced AI technology.",
      rating: 3,
    },
    {
      id: 5,
      content: "Create contracts, agreements & forms in seconds using advanced AI technology.",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Show 3 reviews at a time
  const maxIndex = testimonials.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What our users say</h2>

      <div className="relative max-w-[1152px] mx-auto px-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#173A66] text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Testimonial Cards */}
        <div className="overflow-hidden py-10 px-1">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  w-[320px] h-[280px]
                  md:w-[350px] md:h-[300px]
                  lg:w-[349px] lg:h-[249px]
                  flex-shrink-0 
                  bg-white 
                  rounded-xl 
                  shadow-xl 
                  p-6 
                  flex flex-col
                  justify-between
                "
              >
                {/* Top Section (Profile + Content) */}
                <div className="text-center">
                  <img
                    src={Profilepic}
                    alt="User"
                    className="w-14 h-14 ml-3  rounded-full object-cover mx-auto"
                  />
                  <p className="text-gray-700 mt-1 text-[18px] text-base">
                    {testimonial.content}
                  </p>
                </div>

                {/* Star Rating at Bottom */}
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`mx-1 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      size={20}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#173A66] text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;














// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     text: "Create contracts, agreements & forms in seconds using advanced AI technology",
//     rating: 5,
//   },
//   {
//     id: 2,
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     text: "Create contracts, agreements & forms in seconds using advanced AI technology",
//     rating: 5,
//   },
//   {
//     id: 3,
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//     text: "Create contracts, agreements & forms in seconds using advanced AI technology",
//     rating: 5,
//   },
// ];

// const UserReview = () => {
//   return (
//     <div className="w-full py-10 bg-gradient-to-b from-white to-gray-100">
//       <h2 className="text-center text-2xl font-bold mb-6">
//         What our users say
//       </h2>
//       <div className="relative mx-auto max-w-6xl px-4">
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             nextEl: ".next",
//             prevEl: ".prev",
//           }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="flex justify-center"
//         >
//           {testimonials.map((item) => (
//             <SwiperSlide key={item.id} className="flex justify-center">
//               <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80 border border-gray-200">
//                 <div className="relative w-12 h-12 mx-auto mb-2">
//                   <img
//                     src={item.image}
//                     alt="User"
//                     className="w-12 h-12 rounded-full border-2 border-white shadow-md"
//                   />
//                 </div>
//                 <p className="text-gray-600">{item.text}</p>
//                 <div className="mt-2 text-yellow-500">
//                   {"⭐".repeat(item.rating)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <button className="prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#173A66] text-white p-3 rounded-full shadow-md">
//           <FaChevronLeft />
//         </button>
//         <button className="next absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#173A66] text-white p-3 rounded-full shadow-md">
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserReview;

