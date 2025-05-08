// pages/Formations.jsx
import { div, i } from "framer-motion/client";
import FormationComponent from "./FormationComponent";

const formations = [
  {
    titre: "Mastère Expert en Ingénierie de Logiciel",
    ecole: "ISCOD Institut Supérieur des Compétences de Demain",
    date: "août 2023 - mai 2025",
    image: "logo192.jpg",
  },
  {
    titre: "Mastère en informatique et SI",
    ecole: "EPSI Ecole d’ingénierie Informatique",
    date: "septembre 2021 - juillet 2023",
    image: "logo-groupe-sages.jpg",
  },
  {
    titre: "Développeur - Intégrateur d’applications en alternance",
    ecole: "Groupe Sages",
    date: "Août 2023 - Octobre 2024",
    image: "logo-groupe-sages.jpg",
  },
];

export default function Formation() {
  return (

    <div>
    <h1 className="text-3xl font-bold  text-center">Mes Formations</h1>
    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-20 mb-20">
    

    {/* Ligne verticale centrale */}
    <div className="absolute left-1/2 right-1/2 top-1 h-full border-l-2 border-primary bg-primary transform  -translate-x-1/2 z-0" />

    {/* Formations */}
    <div className="relative z-10">
      {formations.map((form, index) => (
        <FormationComponent key={index} index={index} {...form} />
      ))}
    </div>
  </div>
  </div>
  );
}
