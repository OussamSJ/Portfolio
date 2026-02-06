import FormationComponent from "./FormationComponent";
import { motion } from "framer-motion";

const formations = [
  {
    titre: "Mastère Expert en Ingénierie de Logiciel",
    ecole: "ISCOD Institut Supérieur des Compétences de Demain",
    date: "août 2023 - mai 2025",
    image: "iscod_logo.jpg",
  },
  {
    titre: "Mastère en informatique et SI",
    ecole: "EPSI Ecole d’ingénierie Informatique",
    date: "septembre 2021 - juillet 2023",
    image: "epsi_logo.jpg",
  },
  {
    titre: "Licence en Génie Informatique",
    ecole: "Faculté des sciences et techniques",
    date:  "septembre 2017 - juillet 2021",
    image: "abdelmalek_essaadi_uae_logo.jpg",
  },
];

export default function Formation() {
  return (

    <div>
    <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Formations</h1>
    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-20 mb-20">

      {/* Ligne verticale centrale */}
      <div className="absolute left-1/2 right-1/2 top-1 h-full border-l-2 border-primary bg-primary transform -translate-x-1/2 z-0 hidden sm:block" />

      {/* Formations */}
    <div className="relative z-10">
      {formations.map((form, index) => (
        <FormationComponent key={index} index={index} {...form} />
      ))}
    </div>
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
            <h3 className="text-2xl font-bold">Disponible pour de nouveaux projets</h3>
          </div>
          <p className="text-lg mb-6">
            Je suis actuellement ouvert à de nouvelles opportunités de collaboration.
            Contactez-moi pour discuter de votre projet !
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300 shadow-xl border-2 border-white">
            Me contacter
          </a>
        </motion.div>
  </div>
  
  );
}
