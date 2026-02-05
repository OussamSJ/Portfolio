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


export default function BadgesCertifications() {
  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Diplômes & Certifications</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

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
      </div>
    </section>
  );
}