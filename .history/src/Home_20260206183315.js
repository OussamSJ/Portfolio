import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";

//import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Footbar from "./Footbar";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Services from "./Services";
//import Processus from "./Processus";
import BadgesCertifications from "./Badgescertifications";


  useEffect(() => {
    if (window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
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
      nombre: "25+",
      label: "Technologies Maîtrisées",
      icon: "code",
      color: "#8b5cf6"
    }
  ];

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }


  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  })

  return (

    <div className="Home">
      <Navbar />
      {/* Couverture */}
      <div className="couverture flex items-center mt-10 justify-between text-white p-12 flex-wrap">

        {/* Partie gauche */}
        <div className="flex flex-col ml-20 items-start space-y-4 max-w-md w-max h-max">
          <h3 className="text-4xl  text-white font-semibold">Oussama SEYID JEBARI</h3>
          <h3 className="text-2xl text-white">Développeur Logiciel</h3>
          <div className="w-400 h-400 mt-4  ">
            <img src="Photo_de_Oussama.png" alt="photo_de_profil" className="shadow rounded-lg object-cover w-full h-full" />
          </div>
        </div>

        {/* Partie droite */}
        <div className="text-right max-w-md mt-10 md:mt-30">
          <h1 className="text-6xl text-white font-bold mb-6 leading-tight">
            Bienvenue sur <br /> mon Portfolio</h1>
          <button>
            <a
              href="/cv"
              className="text-4xl bg-transparent text-white font-bold py-2 px-6 mr-12 rounded shadow border border-white 
  hover:bg-white hover:text-blue-800 transition-colors duration-300 relative"
            >
              Voir mon CV
            </a>

          </button>
        </div>
      </div>





      <section className="bg-white text-gray-800 p-8 rounded-lg shadow-md my-8 w-full h-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-center mt-20 ">À propos de moi</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />
        <p className="text-xl mb-6">
          Bonjour, je m'appelle Oussama, développeur passionné par les technologies émergentes,
          à la recherche de projets innovants où impact et excellence technique se rencontrent.
          Toujours en veille sur les dernières avancées technologiques, je m’épanouis dans des
          environnements dynamiques où les défis sont une opportunité d’apprendre, d’innover et
          de progresser. Je m'investis pleinement dans les projets auxquels je contribue, avec
          une approche orientée résultats, efficacité et créativité.</p>
        <p className="text-xl mb-6">
          Mon objectif est d’apporter des solutions robustes et intelligentes à des problématiques
          complexes, tout en collaborant avec des équipes ambitieuses et passionnées.</p>
        <p className="text-xl mb-6">
          Discutons ensemble si vous recherchez un profil technique curieux, rigoureux et motivé
          à relever de nouveaux défis.
        </p>

      </section>

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

      <Services />

      <section className="my-20">
        <h2 className="text-4xl font-bold mb-4 text-center mt-20">Technologies</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            { src: "angular.svg", alt: "angular" },
            { src: "spring-boot.svg", alt: "spring-boot" },
            { src: "react.svg", alt: "React" },
            { src: "nodejs.png", alt: "NodeJs" },
            { src: "python.png", alt: "Python" },
            { src: "java.png", alt: "Java" },
            { src: "Kotlin.webp", alt: "Kotlin" },
            { src: "js.png", alt: "JavaScript" },
            { src: "php.png", alt: "php" },
            { src: "serveur-sql.png", alt: "SQL" },
            { src: "docker.png", alt: "Docker" },
            { src: "kubernets.svg", alt: "kubernets" },
            { src: "power-bi.svg", alt: "power-bi" },
            { src: "gitlab.svg", alt: "gitlab" },
            { src: "cassandra.svg", alt: "cassandra" },

          ].map((tech, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded shadow flex items-center justify-center h-32 group hover:bg-primary transition duration-300"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="h-full w-full object-contain  group-hover:brightness-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <BadgesCertifications />


      <section className="my-12 px-4">
        <h2 className="text-4xl font-bold mb-4 text-center mt-20">Langues</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { nom: "Français", niveau: "Courant", pourcentage: 100 },
            { nom: "Anglais", niveau: "Professionnel", pourcentage: 70 },
            { nom: "Arabe", niveau: "Langue maternelle", pourcentage: 100 },
            { nom: "Espagnol", niveau: "Notions", pourcentage: 20 },
          ]
            .map((langue, index) => (
              <motion.div
                key={langue.nom}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg"
              >
                <p className="text-xl font-semibold text-center">{langue.nom}</p>
                <p className="text-sm text-center mt-1 text-gray-600">{langue.niveau}</p>

                {/* Barre de progression */}
                <div className="mt-4 w-full h-2 rounded-full bg-gray-200">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${langue.pourcentage}%` }}
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Utiliser le nouveau composant ContactForm */}
      <div id="contact">
        <ContactForm />
      </div>

      {/*Footbar*/}
      <Footbar />

    </div>
  );
}

export default Home;