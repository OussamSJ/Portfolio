import Expcomponent from "./Expcomponent";
import { motion } from "framer-motion";


{/* component /Experiences-professionnelles */ }

// Liste des expériences professionnelles
const experiences = [
  {
    titre: "Développeur Java / Spring Boot",
    entreprise: "Mission freelance",
    date: "Décembre 2025 - Mars 2026",
    image: "java-spring-logo.png",
    description: "Conception et développement d’un mini PMS avec intégration POS et borne via API. Automatisation des processus métier et synchronisation des données (réduction des erreurs, gain de temps). Optimisation des performances pour augmenter la productivité des utilisateurs.",
  },
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
    date: "février 2022 - août 2022",
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
    <div>
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl p-8 font-bold mb-10">Mes Expériences professionnelles</h1> <br />
        {experiences.map((exp, index) => (
          <Expcomponent key={index} index={index} {...exp} />
        ))}

      </div>
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-primary to-pink-500 text-white p-8 rounded-lg shadow-xl text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          <h3 className="text-2xl font-bold">Prêt à démarrer votre projet ?</h3>
        </div>
        <p className="text-lg mb-6">
          Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300 shadow-xl border-2 border-white"
        >
          Me contacter
        </a>
      </motion.div>
    </div>


  );
}
