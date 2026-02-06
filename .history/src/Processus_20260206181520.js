import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";

const etapes = [
  {
    numero: "01",
    titre: "Analyse & Cadrage",
    description: "Échange détaillé sur vos besoins, objectifs et contraintes. Définition du périmètre fonctionnel et technique du projet.",
    icon: "comments",
    duree: "1-3 jours",
    livrables: ["Cahier des charges", "Devis détaillé", "Planning prévisionnel"]
  },
  {
    numero: "02",
    titre: "Conception & Design",
    description: "Élaboration de l'architecture technique, maquettes UI/UX et modélisation des données. Validation avant développement.",
    icon: "pencil alternate",
    duree: "3-5 jours",
    livrables: ["Maquettes", "Diagrammes techniques", "Spécifications"]
  },
  {
    numero: "03",
    titre: "Développement",
    description: "Implémentation des fonctionnalités avec méthodologie Agile. Points d'avancement réguliers et livraisons itératives.",
    icon: "code",
    duree: "Selon projet",
    livrables: ["Code source", "Tests unitaires", "Documentation"]
  },
  {
    numero: "04",
    titre: "Tests & Validation",
    description: "Tests fonctionnels, de performance et de sécurité. Recette avec le client et corrections éventuelles.",
    icon: "check circle",
    duree: "2-4 jours",
    livrables: ["Rapports de tests", "Version stable", "Guide utilisateur"]
  },
  {
    numero: "05",
    titre: "Déploiement",
    description: "Mise en production sur l'environnement choisi. Configuration serveur, CI/CD et monitoring.",
    icon: "rocket",
    duree: "1-2 jours",
    livrables: ["Application en production", "Documentation technique", "Accès admin"]
  },
  {
    numero: "06",
    titre: "Support & Maintenance",
    description: "Accompagnement post-lancement, corrections de bugs, évolutions et optimisations continues.",
    icon: "life ring",
    duree: "Selon contrat",
    livrables: ["Support réactif", "Mises à jour", "Rapports mensuels"]
  }
];

export default function Processus() {
  return (
    <section className="my-20 px-4py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Processus de Travail</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden  bg-gray-50  sm:block" />
        
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Une méthodologie <strong>structurée et transparente</strong> pour garantir la réussite de votre projet.
          Chaque étape est conçue pour maximiser la qualité et votre satisfaction.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale (desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden lg:block" />

          {/* Étapes */}
          {etapes.map((etape, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 lg:mb-16 flex flex-col lg:flex-row items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Contenu */}
                <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* En-tête */}
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="bg-primary text-white font-bold text-2xl w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                        {etape.numero}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{etape.titre}</h3>
                        <p className="text-sm text-primary font-semibold">
                          <Icon name="clock outline" /> {etape.duree}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {etape.description}
                    </p>

                    {/* Livrables */}
                    <div>
                      <div>
                      <p className="font-semibold text-gray-700 mb-2 ${isEven ? 'lg:text-right' : ''}">
                        <Icon name="file alternate" /> Livrables :
                      </p>
                      </div>
                      <ul className={`text-sm text-gray-600 space-y-1 `}>
                        {etape.livrables.map((livrable, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Icon name="check" className="text-primary" />
                            <span>{livrable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Icône centrale (desktop) */}
                <div className="hidden lg:flex w-2/12 justify-center items-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Icon name={etape.icon} size="large" style={{ margin: 0 }} />
                  </div>
                </div>

                {/* Espace vide pour alignement (desktop) */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>


       {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-pink-500 text-white p-8 rounded-lg shadow-xl text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold">Prêt à démarrer votre projet ?</h3>
          </div>
          <p className="text-lg mb-6">
           Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300 shadow-lg"
          >
            Me contacter  
            
          </a>
        </motion.div>
    </section>
  );
}