import { useEffect, useState } from "react";

import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Footbar from "./Footbar";
import ProjetComponent from "./projets/ProjetComponent";
import { projets } from "./projets/Projet";



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
        <div className="flex flex-col items-start space-y-4 max-w-md w-max h-max">
          <h3 className="text-xl text-white font-semibold">Oussama SEYID JEBARI</h3>
          <h3 className="text-lg text-white">Développeur Logiciel</h3>
          <div className="w-200 h-200 mt-4 ml-20 ">
            <img src="oussama_img.png" alt="photo_de_profil" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>

        {/* Partie droite */}
        <div className="text-right max-w-md mt-10 md:mt-30">
          <h1 className="text-4xl text-white font-bold mb-6 leading-tight">
            Bienvenue sur <br /> mon Portfolio</h1>
          <button className="bg-transparent text-white font-bold py-2 px-6 mr-12 rounded shadow border border-white 
          hover:bg-white hover:text-blue-800 transition-colors duration-300 relative">
            Voir mon CV
          </button>
        </div>
      </div>

     


      
      <section className="bg-white text-gray-800 p-8 rounded-lg shadow-md my-8 w-full h-full mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-center mt-20 ">À propos de moi</h2>
       <div className="relative top-1/2 w-1/2 mx-auto h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />
        <p className="text-xl mb-6">
          Je suis Oussama,  <strong>Développeur passionné par les technologies émergentes</strong>, à la recherche de projets innovants où impact et excellence technique se rencontrent.<br />
          Toujours en veille sur les dernières avancées <strong>tech</strong>, je m’épanouis dans les environnements dynamiques où les défis techniques sont une opportunité d’apprendre, d’innover et de progresser.
          Je m'investis pleinement dans les projets auxquels je contribue, avec une approche orientée résultats, efficacité et créativité.<br />
          Mon objectif : apporter <strong>des solutions robustes et intelligentes</strong> à des problématiques complexes, tout en collaborant avec des équipes ambitieuses et passionnées.

          Discutons ensemble si vous recherchez un profil technique <strong>curieux, rigoureux et motivé à relever de nouveaux défis !</strong>
        </p>
      </section>

      <h2 className="text-4xl font-bold mb-4 text-center mt-20 ">Mes Compétences</h2>
      <section className="my-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-gray-100 rounded shadow">React</div>
          <div className="p-4 bg-gray-100 rounded shadow">Java</div>
          <div className="p-4 bg-gray-100 rounded shadow">Spring Boot</div>
          <div className="p-4 bg-gray-100 rounded shadow">SQL</div>

        </div>
      </section>

      <section className="my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Mes projets récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Gestion de projets (PMT)</h3>
            <p className="text-sm mt-2">Application Angular + Spring Boot pour gérer les projets d'une entreprise.</p>
            <a href="https://github.com/OussamSJ/Angular-PMT-FrontEnd" target="_blank" className="text-blue-500 underline mt-2 inline-block">Voir sur GitHub</a>
          </div>
          {/* Répète pour d'autres projets */}
        </div>
      </section>

      {/*   Projets */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets
          .sort(() => Math.random() - 0.5)
          .map((pr, index) => (
            <ProjetComponent key={index} index={index} {...pr} />
          ))}
      </div>



      <Footbar />
    </div>
  );
}

export default Home;