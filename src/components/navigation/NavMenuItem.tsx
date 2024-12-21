import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface NavMenuItemProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

const NavMenuItem = ({ title, image, children }: NavMenuItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-white text-[16px] lg:text-[21px] bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen max-w-screen-2xl mx-auto grid gap-3 p-6 md:grid-cols-[1fr_400px] bg-white">
          <div className="grid gap-3">
            {children}
          </div>
          <div className="flex items-center justify-center p-4">
            <img
              src={image}
              alt={`${title} Collection`}
              className="aspect-[4/3] object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
