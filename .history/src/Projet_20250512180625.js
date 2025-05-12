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

    <div>
    <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Projets</h1>
    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-20 mb-20">
 
      <Card>
        <Card.Img variant="top" src="couverture-portfolio.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
  </div>
  );
}
