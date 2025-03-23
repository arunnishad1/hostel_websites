import React, { useState } from "react";
import TestimonialAPI from "./TestimonialAPI";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialAPI.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialAPI.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
          What Our Residents Say
        </h2>

        <div className="relative w-full flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:left-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
          >
            ❮
          </button>

          {/* Testimonial Card */}
          <div className="max-w-md dark:bg-gray-800 p-6 rounded-lg  transition-all">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                {TestimonialAPI[currentIndex].text}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src={TestimonialAPI[currentIndex].image}
                alt={TestimonialAPI[currentIndex].name}
              />
              <div className="flex flex-col items-start">
                <div className="font-medium text-gray-900 dark:text-white">
                  {TestimonialAPI[currentIndex].name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {TestimonialAPI[currentIndex].role}
                </div>
              </div>
            </figcaption>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:right-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
          >
            ❯
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {TestimonialAPI.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
