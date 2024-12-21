import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface StoreLocation {
  name: string;
  address: string;
  image: string;
  mapsUrl: string;
}

const locations: StoreLocation[] = [
  {
    name: "Fiori Les Berges du Lac",
    address: "Rue du Lac Tibériade, Les Berges du lac, La Marsa, Tunisia",
    image: "Thestore.png",
    mapsUrl: "https://maps.google.com/?q=Les+Berges+du+Lac,+La+Marsa,+Tunisia",
  },
  {
    name: "Fiori Tunisia Mall",
    address: "Tunisia mall en face Zara et Zayn",
    image: "Thestand.png",
    mapsUrl: "https://maps.google.com/?q=Tunisia+Mall,+Tunisia",
  },
];

interface StoreLocationsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const StoreLocationsModal = ({ isOpen, onOpenChange }: StoreLocationsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-black/40 backdrop-blur-md border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white font-['WomanFontBold'] mb-6">
            Nos Boutiques
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg h-[300px] transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-[#591C1C]/90">
                  <p className="text-lg font-['WomanFontBold']">{location.name}</p>
                  <p className="text-sm mt-1">{location.address}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreLocationsModal;