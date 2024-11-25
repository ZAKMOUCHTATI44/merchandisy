import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <div className="my-24 container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          Ce qu’Influence4You <br /> va m’apporter
        </h2>
        <p className="text-[#757575] mt-5">
          {" Une plateforme d'influence qui vous simplifie la vie"}
          <br /> et améliore vos résultats.
        </p>
      </div>
      <div className="container mx-auto px-12 py-12 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#f0f0f0] px-12 pt-12 flex flex-col gap-4 rounded-xl justify-between">
            <h2 className="text-xl font-semibold">Mesure de résultats</h2>
            <p className="text-[#757575]">
              Mise à jour automatique des reportings, calculs des taux
              d’engagements, d’interactions, de l’EMV, de votre position
              concurrentielle...
            </p>
            <Image
              src={"/chart.webp"}
              className="mx-auto"
              alt="Chart"
              width={200}
              height={50}
            />
          </div>
          <div className="bg-[#f0f0f0] px-12 py-6 flex flex-col gap-4 rounded-xl justify-center items-center">
            <h2 className="text-3xl font-semibold absolute gradient-text">
              Productivité
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 234 240"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <circle
                cx="117.381"
                cy="119.779"
                r="76.2766"
                stroke="url(#paint0_linear_2305_4032)"
                stroke-width="2.54255"
              ></circle>
              <circle
                cx="117.805"
                cy="119.356"
                r="97.0408"
                stroke="url(#paint1_linear_2305_4032)"
                stroke-width="2.54255"
              ></circle>
              <circle
                cx="116.958"
                cy="120.203"
                r="115.686"
                stroke="url(#paint2_linear_2305_4032)"
                stroke-width="2.54255"
              ></circle>
              <circle
                cx="116.958"
                cy="120.203"
                r="116.957"
                fill="url(#paint3_radial_2305_4032)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_2305_4032"
                  x1="70.3213"
                  y1="159.271"
                  x2="189.116"
                  y2="159.427"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DE2151"></stop>
                  <stop offset="1" stop-color="#FFB700"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2305_4032"
                  x1="58.1442"
                  y1="169.422"
                  x2="208.748"
                  y2="169.62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DE2151"></stop>
                  <stop offset="1" stop-color="#FFB700"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2305_4032"
                  x1="45.9817"
                  y1="179.765"
                  x2="225.148"
                  y2="180"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DE2151"></stop>
                  <stop offset="1" stop-color="#FFB700"></stop>
                </linearGradient>
                <radialGradient
                  id="paint3_radial_2305_4032"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(116.958 120.203) rotate(90) scale(116.957)"
                >
                  <stop
                    offset="0.701915"
                    stop-color="#F0F0F0"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="#F0F0F0"
                    stop-opacity="0.9"
                  ></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="bg-[#f0f0f0] px-12 pt-12 flex flex-col gap-4 rounded-xl justify-between">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-xl font-semibold">Autonomie</h2>
              <p className="text-[#757575]">
                Pas besoin de faire appel à une agence : on vous guide et on
                peut même vous former.
              </p>
            </div>
            <Image
              src={"/chart.webp"}
              className="mx-auto"
              alt="Chart"
              width={200}
              height={50}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#f0f0f0] col-span-2 px-12 pt-12 flex flex-col gap-4 rounded-xl justify-between">
            <h2 className="text-xl font-semibold">Transparence </h2>
            <p className="text-[#757575]">
              Toutes les fonctionnalités pour collaborer <br /> efficacement
              avec les macro <br /> influenceurs.
            </p>
            <div className="flex justify-between">
              <ul>
                <li className="flex items-center gap-3 font-semibold">
                  <MoveRight className="w-4 h-4 " />
                  Fiches détaillées complètes de 275 M d’influenceurs
                </li>
                <li className="flex items-center gap-3 font-semibold">
                  <MoveRight className="w-4 h-4 " />
                  Stats HypeAuditor intégrées
                </li>
                <li className="flex items-center gap-3 font-semibold">
                  <MoveRight className="w-4 h-4 " />
                  Infos partagées entre tous les utilisateurs
                </li>
              </ul>
              <Image src={"/chart.webp"} alt="Chart" width={200} height={50} />
            </div>
          </div>
          <div className="bg-gradient-to-r text-white from-main-color via-main-color to-second-color px-12 pt-12 flex flex-col gap-4 rounded-xl justify-center">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-3xl font-semibold">Flexibilité</h2>
              <p>
                Importez vos propres listes, les reportings sont modulables et
                personnalisables, exportez en Google Slides, CSV, …
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
