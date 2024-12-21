import React, { useState, useEffect } from "react";

const BrandLocation = () => {
  const location1URL =
    "https://maps.google.com/?q=Les+Berges+du+Lac,+La+Marsa,+Tunisia";
  const location2URL =
    "https://maps.google.com/?q=Tunisia+Mall,+Tunisia";

  const feedbacks = [
    {
      id: 1,
      text: "Merci pour tout et bonne continuation et je vous assure que je serai une cliente fidèle chez vous parce que j'ai adoré tout",
      user: "Client 1",
    },
    {
      id: 2,
      text: "Service exceptionnel et ambiance agréable, je reviendrai avec plaisir !",
      user: "Client 2",
    },
    {
      id: 3,
      text: "Très satisfait de mon expérience, je recommande vivement.",
      user: "Client 3",
    },
    // Add more feedbacks as needed
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prevFeedback) =>
        prevFeedback === feedbacks.length - 1 ? 0 : prevFeedback + 1
      );
    }, 7000); // Change feedback every 7 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <section className="py-8 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Locations - Takes up 50% of the screen */}
          <div className="flex flex-col">
            <h1 className="text-center text-[#591C1C] text-3xl md:text-4xl lg:text-5xl mb-6 font-['WomanFontBold']">
              Trouver un magasin
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
              <a
                href={location1URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg h-[400px] group hover:shadow-lg transition-all">
                  <img
                    src="Thestore.png"
                    alt="Fiori Les Berges du Lac"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-[#591C1C]/90">
                    <p className="text-lg font-['WomanFontBold']">
                      Rue du Lac Tibériade,<br />
                      Les Berges du lac, La Marsa, Tunisia
                    </p>
                  </div>
                </div>
              </a>
              <a
                href={location2URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg h-[400px] group hover:shadow-lg transition-all">
                  <img
                    src="Thestand.png"
                    alt="Fiori Tunisia Mall"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-[#591C1C]/90">
                    <p className="text-lg font-['WomanFontBold']">
                      Tunisia mall en face Zara et Zayn
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#591C1C] rounded-lg p-8 text-white h-[470px] flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl mb-6 font-['WomanFontBold']">Feedbacks</h2>
              <div className="glass-effectFeedback z-10 text-center py-3 mb-8 flex items-center justify-center h-auto">
                <div className="min-h-[100px]">
                  <p className="text-lg mb-4">{feedbacks[currentFeedback].text}</p>
                  <p className="text-sm italic">- {feedbacks[currentFeedback].user}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentFeedback === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentFeedback(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLocation;
