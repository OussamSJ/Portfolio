// pages/Formations.jsx
import { div, i } from "framer-motion/client";
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';

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

  

    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-20 mb-20">
        <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Projets</h1>
      <Card>
        <Card.Img variant="top" src="couverture-portfolio.png" />
        <Card.Body>
          <Card.Text>
           <p className="text-gray-700 text-2xl p-10">
        Cette section regroupe l’ensemble de mes projets réalisés au cours de mon parcours en développement informatique.
        Ils couvrent des domaines variés : développement web full-stack, microservices, systèmes distribués, projets scolaires, scripts utilitaires et expérimentations personnelles.
        Chaque projet illustre une compétence ou un apprentissage spécifique, que ce soit dans l’architecture logicielle, l’intégration continue, l’optimisation ou l'expérience utilisateur.
        Vous pouvez consulter le code source sur mon profil GitHub, ou cliquer sur chaque carte pour plus de détails.
          </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card></Card>
    
      {/*   Projets */}
    <div className="relative z-10">
      {projets.map((pr, index) => (
        <ProjetComponent key={index} index={index} {...pr} />
      ))}
    </div>
  </div>
 
  );
}
