import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Gift,
  Shirt,
  Watch,
  Scissors,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import StoreLocationsModal from "./StoreLocationsModal";
import ContactModal from "./ContactModal";
import CartIcon from "./navigation/CartIcon";

const menuItems = [
  {
    title: "Le monde Fiori",
    icon: Gift,
    link: "#",
    subItems: [
      { href: "/category/le-monde-fiori/printemps", title: "Collections Printemps" },
      { href: "/category/le-monde-fiori/ete", title: "Collections Été" },
      { href: "/category/le-monde-fiori/mariage", title: "Marriage" },
      { href: "/category/le-monde-fiori/soiree", title: "Soirée" },
    ],
  },
  {
    title: "L'univers Cadeaux",
    icon: ShoppingBag,
    link: "#",
    subItems: [
      { href: "/category/univers-cadeaux/pack-prestige", title: "Pack Prestige" },
      { href: "/category/univers-cadeaux/pack-premium", title: "Pack Premium" },
      { href: "/category/univers-cadeaux/pack-trio", title: "Pack Trio" },
      { href: "/category/univers-cadeaux/pack-duo", title: "Pack Duo" },
      { href: "/category/univers-cadeaux/pack-mini-duo", title: "Pack Mini Duo" },
      { href: "/category/univers-cadeaux/pack-mono", title: "Pack Mono" },
    ],
  },
  {
    title: "Le prêt à porter",
    icon: Shirt,
    link: "#",
    subItems: [
      { href: "/category/pret-a-porter/homme/costumes", title: "Costumes" },
      { href: "/category/pret-a-porter/homme/blazers", title: "Blazers" },
      { href: "/category/pret-a-porter/homme/chemises", title: "Chemises" },
      { href: "/category/pret-a-porter/homme/pulls", title: "Pulls" },
      { href: "/category/pret-a-porter/homme/pantalons", title: "Pantalons" },
    ],
  },
  {
    title: "Accessoires",
    icon: Watch,
    link: "#",
    subItems: [
      { href: "/category/accessoires/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/accessoires/homme/ceintures", title: "Ceintures" },
      { href: "/category/accessoires/homme/cravates", title: "Cravates" },
      { href: "/category/accessoires/homme/mallettes", title: "Mallettes" },
    ],
  },
  {
    title: "Sur mesure",
    icon: Scissors,
    link: "/category/sur-mesure",
  },
  {
    title: "Outlet",
    icon: ShoppingBag,
    link: "/category/outlet",
  },
];

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedItem(null);
  };

  const toggleSubmenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-['Montserrat'] font-light">
      <nav className="bg-primary px-6 py-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>

            <button
              onClick={() => setIsStoreModalOpen(true)}
              className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300"
            >
              <MapPin size={18} />
              TROUVER UNE BOUTIQUE
            </button>

            <div className="flex items-center gap-4 sm:hidden">
              <CartIcon />
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300"
            >
              <Phone size={18} />
              CONTACTEZ-NOUS
            </button>
            <CartIcon />
          </div>
        </div>
      </nav>

      {/* Enhanced Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-br from-[#700100] via-[#8B0000] to-[#700100] backdrop-blur-lg shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 w-80`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white tracking-wider">Menu</h2>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white hover:text-accent transition-colors duration-300"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
          <ul className="p-6 space-y-6">
            {menuItems.map((item) => (
              <li key={item.title} className="text-white">
                <div
                  className="group flex items-center gap-4 cursor-pointer hover:text-accent transition-all duration-300 p-3 rounded-lg hover:bg-white/5"
                  onClick={() => item.subItems && toggleSubmenu(item.title)}
                >
                  <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <Link 
                    to={item.link} 
                    className="text-lg font-medium flex-1 text-left group-hover:translate-x-1 transition-transform duration-300"
                  >
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <span className="ml-auto transition-transform duration-300">
                      {expandedItem === item.title ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  )}
                </div>
                {item.subItems && expandedItem === item.title && (
                  <ul className="ml-4 mt-2 space-y-2 animate-accordion-down">
                    {item.subItems.map((subItem) => (
                      <li 
                        key={subItem.href}
                        className="relative"
                      >
                        <Link
                          to={subItem.href}
                          className="block text-sm py-2 px-4 text-left hover:text-accent transition-colors duration-300 hover:bg-white/5 rounded-md relative pl-6"
                        >
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/50"></span>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <StoreLocationsModal
        isOpen={isStoreModalOpen}
        onOpenChange={setIsStoreModalOpen}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};

export default TopNavbar;
