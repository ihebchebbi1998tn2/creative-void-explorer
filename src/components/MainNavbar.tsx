import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from './navigation/NavMenuItem';
import SubMenuSection from './navigation/SubMenuSection';

const MainNavbar = () => {
  return (
    <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFont']">
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center">
         <NavMenuItem title="Le monde Fiori" image="/Articles/1.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Collections"
      items={[
        {
          href: "/category/le-monde-fiori",
          title: "Collections Printemps",
          description: "Découvrez nos créations printanières"
        },
        {
          href: "/category/le-monde-fiori",
          title: "Collections Été",
          description: "Styles légers pour l'été"
        }
      ]}
    />
    <SubMenuSection
      title="Occasions"
      items={[
        {
          href: "/category/le-monde-fiori",
          title: "Marriage",
          description: "Collections élégantes pour mariage"
        },
        {
          href: "/category/le-monde-fiori",
          title: "Soirée",
          description: "Design festifs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="L'univers Cadeaux" image="/Articles/2.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Pack Composé"
      items={[
        {
          href: "/category/univers-cadeaux",
          title: "Pack Prestige",
          description: "Notre collection prestige"
        },
        {
          href: "/category/univers-cadeaux",
          title: "Pack Premium",
          description: "Collection premium"
        },
        {
          href: "/category/univers-cadeaux",
          title: "Pack Trio",
          description: "Ensemble de trois pièces"
        },
        {
          href: "/category/univers-cadeaux",
          title: "Pack Duo",
          description: "Ensemble de deux pièces"
        },
        {
          href: "/category/univers-cadeaux",
          title: "Pack Mini Duo",
          description: "Petit ensemble duo"
        }
      ]}
    />
    <SubMenuSection
      title="Pack Mono"
      items={[
        {
          href: "/category/univers-cadeaux",
          title: "Pack Mono",
          description: "Pièce unique"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Le prêt à porter" image="/Articles/3.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/pret-a-porter",
          title: "Costumes",
          description: "Costumes élégants"
        },
        {
          href: "/category/pret-a-porter",
          title: "Blazers",
          description: "Blazers raffinés"
        },
        {
          href: "/category/pret-a-porter",
          title: "Chemises",
          description: "Chemises classiques"
        },
        {
          href: "/category/pret-a-porter",
          title: "Pulls",
          description: "Pulls confortables"
        },
        {
          href: "/category/pret-a-porter",
          title: "Pantalons",
          description: "Pantalons élégants"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/pret-a-porter",
          title: "Chemises",
          description: "Chemises féminines"
        },
        {
          href: "/category/pret-a-porter",
          title: "Robes",
          description: "Robes élégantes"
        },
        {
          href: "/category/pret-a-porter",
          title: "Vestes/Manteaux",
          description: "Vestes et manteaux"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Accessoires" image="/Articles/4.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/accessoires",
          title: "Portefeuilles",
          description: "Portefeuilles élégants"
        },
        {
          href: "/category/accessoires",
          title: "Ceintures",
          description: "Ceintures raffinées"
        },
        {
          href: "/category/accessoires",
          title: "Cravates",
          description: "Cravates élégantes"
        },
        {
          href: "/category/accessoires",
          title: "Mallettes",
          description: "Mallettes professionnelles"
        },
        {
          href: "/category/accessoires",
          title: "Porte-cartes",
          description: "Porte-cartes élégants"
        },
        {
          href: "/category/accessoires",
          title: "Porte-clés",
          description: "Porte-clés raffinés"
        },
        {
          href: "/category/accessoires",
          title: "Porte-chèques",
          description: "Porte-chèques élégants"
        },
        {
          href: "/category/accessoires",
          title: "Porte-passeports",
          description: "Porte-passeports raffinés"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/accessoires",
          title: "Sacs à main",
          description: "Sacs à main élégants"
        },
        {
          href: "/category/accessoires",
          title: "Sacs",
          description: "Collection de sacs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Le sur mesure" image="/Articles/4.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/sur-mesure",
          title: "Portefeuilles",
          description: "Portefeuilles élégants"
        },
        {
          href: "/category/sur-mesure",
          title: "Ceintures",
          description: "Ceintures raffinées"
        },
        {
          href: "/category/sur-mesure",
          title: "Cravates",
          description: "Cravates élégantes"
        },
        {
          href: "/category/sur-mesure",
          title: "Mallettes",
          description: "Mallettes professionnelles"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/sur-mesure",
          title: "Sacs à main",
          description: "Sacs à main élégants"
        },
        {
          href: "/category/sur-mesure",
          title: "Sacs",
          description: "Collection de sacs"
        }
      ]}
    />
  </div>
</NavMenuItem>

<NavMenuItem title="Outlet" image="/NewCollection/Together We Feast.png">
  <div className="grid grid-cols-2 gap-3">
    <SubMenuSection
      title="Homme"
      items={[
        {
          href: "/category/outlet",
          title: "Costumes",
          description: "Costumes en promotion"
        },
        {
          href: "/category/outlet",
          title: "Blazers",
          description: "Blazers en solde"
        },
        {
          href: "/category/outlet",
          title: "Chemises",
          description: "Chemises en promotion"
        },
        {
          href: "/category/outlet",
          title: "Pulls",
          description: "Pulls en solde"
        },
        {
          href: "/category/outlet",
          title: "Pantalons",
          description: "Pantalons en promotion"
        }
      ]}
    />
    <SubMenuSection
      title="Femme"
      items={[
        {
          href: "/category/outlet",
          title: "Chemises",
          description: "Chemises en promotion"
        },
        {
          href: "/category/outlet",
          title: "Robes",
          description: "Robes en solde"
        },
        {
          href: "/category/outlet",
          title: "Vestes/Manteaux",
          description: "Vestes et manteaux en promotion"
        }
      ]}
    />
  </div>
</NavMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavbar;