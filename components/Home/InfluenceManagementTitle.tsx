import { Globe } from "lucide-react";
import React from "react";

const InfluenceManagementTitle = () => {
  return (
    <div className="my-24 container mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        Gérez toute votre influence en une <br /> seule plateforme !
      </h2>
      <div className="grid grid-cols-3 mt-12 mx-5">
        <div className="text-end px-5">
          <h2 className="gradient-text font-semibold text-3xl flex items-center justify-end gap-5">
            Recherche et <br /> gestion de projets
            <Globe className="w-6 h-6 text-main-color" />
          </h2>
          <p className="ml-auto mt-5">
            Vous aimeriez un outil pour identifier les meilleurs influenceurs
            parmi 275 millions de profils et gérer vos projets de façon optimale
            pour atteindre vos objectifs de notoriété, dengagement et de vente ?
            Influence4You est faite pour vous !
          </p>
        </div>

        <div className="w-full">
        </div>
        <div className="text-start px-5">
          <h2 className="gradient-text font-semibold text-3xl flex items-center justify-start gap-5">
            <Globe className="w-6 h-6 text-main-color" />
            Recherche et <br /> gestion de projets
          </h2>
          <p className="ml-auto mt-5">
            Vous aimeriez un outil pour identifier les meilleurs influenceurs
            parmi 275 millions de profils et gérer vos projets de façon optimale
            pour atteindre vos objectifs de notoriété, dengagement et de vente ?
            Influence4You est faite pour vous !
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfluenceManagementTitle;
