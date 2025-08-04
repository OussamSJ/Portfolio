import { useEffect, useState } from "react";

//import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Footbar from "./Footbar";
import { motion } from "framer-motion";



const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

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
            <img src="oussama_img.png" alt="photo_de_profil" className="shadow rounded-lg object-cover w-full h-full" />
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
          Je suis Oussama,  <strong>Développeur passionné par les technologies émergentes</strong>, à la recherche de projets innovants où impact et excellence technique se rencontrent.<br />
          Toujours en veille sur les dernières avancées <strong>tech</strong>, je m’épanouis dans les environnements dynamiques où les défis techniques sont une opportunité d’apprendre, d’innover et de progresser.
          Je m'investis pleinement dans les projets auxquels je contribue, avec une approche orientée résultats, efficacité et créativité.<br />
          Mon objectif : apporter <strong>des solutions robustes et intelligentes</strong> à des problématiques complexes, tout en collaborant avec des équipes ambitieuses et passionnées.

          Discutons ensemble si vous recherchez un profil technique <strong>curieux, rigoureux et motivé à relever de nouveaux défis !</strong>
        </p>
      </section>

      <section className="my-20">
        <h2 className="text-4xl font-bold mb-4 text-center mt-20">Mes Compétences</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            { src: "angular.svg", alt: "angular" },
            { src: "spring-boot.svg", alt: "spring-boot" },
            { src: "react.svg", alt: "React" },
            { src: "nodejs.png", alt: "NodeJs" },
            { src: "python.png", alt: "Python" },
            { src: "java.png", alt: "Java" },
            { src: "Kotlin.png", alt: "Kotlin" },
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

      <section className="my-20 px-4 text-white">
        <h2 className="text-4xl font-bold mb-4 text-center mt-20">Contactez-moi</h2>
        <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium mb-2">Nom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium mb-2">Prénom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-xl font-medium mb-2">Tél.</label>
            <input
              type="tel"
              id="téléphone"
              name="téléphone"
              placeholder="Ex: +33 6 12 34 56 78"
              pattern="^(\+[1-500]|0)[1-9](\s?\d{2}){4}$"
              title="Entrez un numéro français valide : 06 12 34 56 78 ou +33612345678"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium mb-2">Nom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-xl font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-6 rounded hover:bg-blue-900 transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </section>

      <Footbar />
    </div>
  );
}

export default Home;