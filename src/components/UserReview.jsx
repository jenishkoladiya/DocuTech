import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Profilepic from "../assets/Ellipse 4.png";

const UserReview = () => {
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

export default UserReview;