import React from 'react';
import { Button } from './ui/button';

const NewCollection = () => {
  return (
    <section className="bg-[#4A0404] text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-['WomanFontBold']">New Collection</h2>
           
            {/* Center-aligned images */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-2 md:space-x-4">
                <div className="h-60 md:h-80 overflow-hidden">
                  <img
                    src="NewCollection/4.png"
                    alt="Inside label"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-60 md:h-80 overflow-hidden">
                  <img
                    src="NewCollection/1.png"
                    alt="Suit gesture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex space-x-2 md:space-x-4">
                <div className="h-60 md:h-80 overflow-hidden">
                  <img
                    src="NewCollection/4.png"
                    alt="Inside label"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-60 md:h-80 overflow-hidden">
                  <img
                    src="NewCollection/1.png"
                    alt="Suit gesture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Center-aligned button */}
            <div className="flex justify-center mt-4 md:mt-6">
              <Button
                variant="outline"
                className="px-6 md:px-8 py-2 bg-transparent border-white text-white hover:bg-white hover:text-[#4A0404] transition-colors font-['WomanFontBold'] text-sm md:text-base"
              >
                DISCOVER MORE
              </Button>
            </div>
          </div>

          {/* Full-width image */}
          <div className="hidden lg:block">
            <div className="h-full">
              <img
                src="NewCollection/Main.png"
                alt="Full suit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
