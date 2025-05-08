// pages/Formations.jsx
import { i } from "framer-motion/client";
import FormationComponent from "./FormationComponent";

const formations = [
  {
    titre: "Développeur - Intégrateur d’applications en alternance",
    ecole: "Groupe Sages",
    date: "Août 2023 - Octobre 2024",
    image: "logo-groupe-sages.jpg",
  },
  {
    titre: "Développeur - Intégrateur d’applications en alternance",
    ecole: "Groupe Sages",
    date: "Août 2023 - Octobre 2024",
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
    <div className="relative max-w-6xl mx-auto py-auto px-4">
    <h1 className="text-3xl font-bold mb-16 text-center">Mes Formations</h1>

    {/* Ligne verticale centrale */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2 z-0" />

    {/* Formations */}
    <div className="relative z-10">
      {formations.map((form, index) => (
        <FormationComponent key={index} index={index} {...form} />
      ))}
    </div>
  </div>
  );
}
