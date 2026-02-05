import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";

const services = [
  {
    icon: "code",
    titre: "Développement Web Full-Stack",
    description: "Création d'applications web modernes et performantes avec React, Angular, Spring Boot et Node.js. Architecture scalable et sécurisée.",
    technologies: ["React", "Angular", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB"],
    color: "#3b82f6"
  },
  {
    icon: "mobile alternate",
    titre: "Développement Mobile",
    description: "Applications Android natives avec Kotlin. Interface utilisateur intuitive et performante suivant les principes Material Design.",
    technologies: ["Kotlin", "Android Studio", "Material Design", "API REST"],
    color: "#10b981"
  },
  {
    icon: "server",
    titre: "API & Microservices",
    description: "Conception et développement d'APIs REST robustes et documentées. Architecture microservices avec Docker et Kubernetes.",
    technologies: ["Spring Boot", "FastAPI", "Docker", "Kubernetes", "Swagger"],
    color: "#8b5cf6"
  },
  {
    icon: "chart line",
    titre: "Machine Learning & Data Science",
    description: "Modèles prédictifs et analyse de données. Implémentation de solutions d'intelligence artificielle pour vos besoins métiers.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    color: "#f59e0b"
  },
  {
    icon: "database",
    titre: "Gestion de Bases de Données",
    description: "Conception, optimisation et administration de bases de données relationnelles et NoSQL. Migration et sécurisation des données.",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Redis"],
    color: "#ec4899"
  },
  {
    icon: "settings",
    titre: "DevOps & CI/CD",
    description: "Mise en place de pipelines d'intégration et déploiement continus. Automatisation et monitoring de vos infrastructures.",
    technologies: ["Docker", "Kubernetes", "GitLab CI", "GitHub Actions", "Jenkins"],
    color: "#06b6d4"
  }
];

export default function Services() {
  return (
    <section className="my-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center mt-20">Services Proposés</h2>
      <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />
      
      <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Je vous accompagne dans la réalisation de vos projets numériques, de la conception à la mise en production.
        <strong> Solutions sur mesure</strong> adaptées à vos besoins et contraintes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
            style={{ borderTopColor: service.color }}
          >
            {/* Icône */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <Icon 
                name={service.icon} 
                size="big" 
                style={{ color: service.color, margin: 0 }}
              />
            </div>

            {/* Titre */}
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: service.color }}>
              {service.titre}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">
              {service.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    color: service.color
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 mb-6">
          Un projet en tête ? Discutons-en !
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Demander un devis gratuit
        </a>
      </div>
    </section>
  );
}