// pages/Experiences.jsx
import { i } from "framer-motion/client";
import FormationComponent from "../FormationComponent";

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

export default function Experiences() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mes Expériences professionnelles</h1>
      {experiences.map((exp, index) => (
        <Expcomponent key={index} index={index} {...exp} />
      ))}
    </div>
  );
}
