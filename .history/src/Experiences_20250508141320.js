// pages/Experiences.jsx
import { i } from "framer-motion/client";
import Expcomponent from "./Expcomponent";

const experiences = [
  {
    titre: "Développeur - Intégrateur d’applications en alternance",
    entreprise: "Groupe Sages",
    date: "Août 2023 - Octobre 2024",
    image: "logo-groupe-sages.jpg",
    description: "Développement et intégration des modules spécifique autour de l’ERP Codial, développement des connecteurs pour intégrerdes solutions externes via des APIs, optimisation de la prise de décision grâce à des tableaux de bord interactifs et des visualisations, hotline et Assistance technique des utilisateurs.",
  },
  {
    titre: "Equipier polyvalent",
    entreprise: "Burger King",
    date: "janvier 2023 - août 2023",
    image: "Logo_BK.png",
    description: "Travailler en équipe pour garantir un service fluide, Participer à l’entretien quotidien du restaurant, Accueillir les clients avec professionnalisme.",
  },
  {
    titre: "Développeur Web SEO (stage)",
    entreprise: "Matos Import by Jeff",
    date: "février 2022 - août 2022SOFT",
    image: "matos_import_by_jeff_logo.jpg",
    description: "La refonte du site e-commerce, co-rédactionet description des produits, référencement naturel SEO, Développement en Html, CSS, JS et Php sur le CMS Prestashop et Développement d’un module de recherche spécifique.",
  },
  {
    titre: "Assistant responsable IT (stage)",
    entreprise: "Fromageries Bel",
    date: "Avril 2021 - Juillet 2021",
    image: "logo-frommageries-bel.png",
    description: "Effectuer la cartographie des applications industrielles, migration réseau vers un nouveau réseau phisique et support technique.",
  },
];

export default function Experiences() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mes Expériences professionnelles <br/></h1>
      {experiences.map((exp, index) => (
        <Expcomponent key={index} index={index} {...exp} />
      ))}
    </div>
  );
}
