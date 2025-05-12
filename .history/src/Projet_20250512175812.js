// pages/Formations.jsx
import { div, i } from "framer-motion/client";
import ProjetComponent from "./ProjetComponent";

const projets = [
    {
        id: '1',
        titre: 'Portfolio React',
        description: 'Un site personnel développé avec React et Tailwind CSS.',
        image: '/images/portfolio.png',
      },
      {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        image: '/images/api.png',
      },
      {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        image: '/images/api.png',
      },
      {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        image: '/images/api.png',
      },
];

export default function Projet() {
  return (

    <div>
    <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Projets</h1>
    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-20 mb-20">

      {/* Ligne verticale centrale */}
      <div className="absolute left-1/2 right-1/2 top-1 h-full border-l-2 border-primary bg-primary transform -translate-x-1/2 z-0 hidden sm:block" />

      {/*   Projets */}
    <div className="relative z-10">
      {projets.map((pr, index) => (
        <ProjetComponent key={index} index={index} {...pr} />
      ))}
    </div>
  </div>
  </div>
  );
}
