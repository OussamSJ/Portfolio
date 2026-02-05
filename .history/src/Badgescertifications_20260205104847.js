import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";

const badges = [
  {
    titre: "Mastère Expert en Ingénierie Logiciel",
    organisation: "ISCOD",
    annee: "2023-2025",
    type: "Diplôme",
    icon: "graduation cap",
    color: "#3b82f6"
  },
  {
    titre: "Mastère en Informatique et SI",
    organisation: "EPSI",
    annee: "2021-2023",
    type: "Diplôme",
    icon: "graduation cap",
    color: "#10b981"
  },
  {
    titre: "Licence en Génie Informatique",
    organisation: "FST Tanger",
    annee: "2017-2021",
    type: "Diplôme",
    icon: "graduation cap",
    color: "#8b5cf6"
  }
];

const certifications = [
  {
    titre: "Spring Framework Professional",
    organisation: "Certification en cours",
    icon: "certificate",
    color: "#10b981"
  },
  {
    titre: "AWS Cloud Practitioner",
    organisation: "En préparation",
    icon: "cloud",
    color: "#f59e0b"
  }
];

const stats = [
  {
    nombre: "20+",
    label: "Projets Réalisés",
    icon: "folder open",
    color: "#3b82f6"
  },
  {
    nombre: "3+",
    label: "Ans d'Expérience",
    icon: "briefcase",
    color: "#10b981"
  },
  {
    nombre: "100%",
    label: "Satisfaction Client",
    icon: "smile",
    color: "#f59e0b"
  },
  {
    nombre: "10+",
    label: "Technologies Maîtrisées",
    icon: "code",
    color: "#8b5cf6"
  }
];

const githubStats = {
  username: "OussamSJ",
  repos: "15+",
  stars: "50+",
  contributions: "500+"
};

export default function BadgesCertifications() {
  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Diplômes & Certifications</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <Icon 
                  name={stat.icon} 
                  size="big" 
                  style={{ color: stat.color, margin: 0 }}
                />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.nombre}
              </h3>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-xl mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/github.svg" alt="GitHub" className="w-12 h-12 invert" />
            <h3 className="text-2xl font-bold">GitHub Profile</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">{githubStats.repos}</p>
              <p className="text-gray-300">Repositories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">{githubStats.stars}</p>
              <p className="text-gray-300">Stars</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">{githubStats.contributions}</p>
              <p className="text-gray-300">Contributions</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Voir mon profil GitHub
              <Icon name="external alternate" className="ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Diplômes */}
        <h3 className="text-2xl font-bold mb-6 text-center">Diplômes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4"
              style={{ borderLeftColor: badge.color }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: `${badge.color}20` }}
              >
                <Icon 
                  name={badge.icon} 
                  size="big" 
                  style={{ color: badge.color, margin: 0 }}
                />
              </div>
              
              <h4 className="text-lg font-bold text-center mb-2" style={{ color: badge.color }}>
                {badge.titre}
              </h4>
              <p className="text-gray-600 text-center mb-2">{badge.organisation}</p>
              <p className="text-sm text-gray-500 text-center">
                <Icon name="calendar" /> {badge.annee}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications en cours */}
        <h3 className="text-2xl font-bold mb-6 text-center">Certifications en cours</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <Icon 
                  name={cert.icon} 
                  size="large" 
                  style={{ color: cert.color, margin: 0 }}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold" style={{ color: cert.color }}>
                  {cert.titre}
                </h4>
                <p className="text-gray-600 text-sm">{cert.organisation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge de disponibilité */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-pink-500 text-white p-8 rounded-lg shadow-xl text-center"
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
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Me contacter
            <Icon name="arrow right" className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}