import React from "react";
import CardAPI from "./CardAPI.jsx";
import CardLinkButton from "./CardLinkButton.jsx";

const CardList = () => {
  return (
    <div className="bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Explore Our Hostel Features
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover the best amenities and comfortable living spaces.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-evenly">
        {CardAPI.map((card) => (
          <div
            key={card.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={card.link}>
              <img
                className="rounded-t-lg w-full h-52 object-cover"
                src={card.image}
                alt={card.title}
              />
            </a>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <CardLinkButton text="read more" card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
