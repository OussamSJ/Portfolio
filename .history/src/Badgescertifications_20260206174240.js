import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";


const certifications = [
  {
    titre: "Certificat Power BI",
    organisation: "Mype",
    icon: "certificate",
    color: "#f59e0b"
  },
  {
    titre: "Mettre en place un CRM",
    organisation: "BPI",
    icon: "cloud",
    color: "#f59e0b"
  },
  {
    titre: "Marketing sur les réseaux sociaux",
    organisation: "HP",
    icon: "computer",
    color: "#f59e0b"
  },
  {
    titre: "Mastère Expert en Ingénierie Logiciel",
    organisation: "ISCOD",
    icon: "graduation cap",
    color: "#00008B"
  },
  {
    titre: "Licence en Génie Informatique",
    organisation: "FSTT",
    icon: "graduation cap",
    color: "#4169E1"
  }
];


export default function BadgesCertifications() {
  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Certifications</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />
        {/* Certifications en cours */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
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