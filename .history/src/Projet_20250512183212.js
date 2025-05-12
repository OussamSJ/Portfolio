// pages/Formations.jsx
import { div, i } from "framer-motion/client";
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';

const projets = [
    {
        id: '1',
        titre: 'Portfolio React',
        description: 'Un site personnel développé avec React et Tailwind CSS.',
        description_longue: 'Ce portfolio présente mes compétences, expériences et projets. Il est entièrement responsive et utilise React pour une navigation fluide. Le design est réalisé avec Tailwind CSS pour une personnalisation rapide et efficace.',
        image: '/images/portfolio.png',
    },
    {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        description_longue: 'Cette API permet de gérer les produits d\'une boutique en ligne, avec des fonctionnalités de création, lecture, mise à jour et suppression (CRUD). Elle est sécurisée avec JWT et utilise MongoDB pour le stockage des données.',
        image: '/images/api.png',
    },
    {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        description_longue: 'Cette API permet de gérer les produits d\'une boutique en ligne, avec des fonctionnalités de création, lecture, mise à jour et suppression (CRUD). Elle est sécurisée avec JWT et utilise MongoDB pour le stockage des données.',
        image: '/images/api.png',
    },
    {
        id: '2',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        description_longue: 'Cette API permet de gérer les produits d\'une boutique en ligne, avec des fonctionnalités de création, lecture, mise à jour et suppression (CRUD). Elle est sécurisée avec JWT et utilise MongoDB pour le stockage des données.',
        image: '/images/api.png',
    },
];

export default function Projet() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Projets</h1>
            <Card>
                <Card.Img variant="top" src="couverture-portfolio.png" />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            Cette section regroupe l’ensemble de mes projets réalisés au cours de mon parcours en développement logicielle.
                            Ils couvrent des domaines variés : développement web frontend, développement web backend, microservices, systèmes distribués, projets scolaires, scripts utilitaires et expérimentations personnelles.
                            Chaque projet illustre une compétence ou un apprentissage spécifique, que ce soit dans l’architecture logicielle, l’intégration continue, l’optimisation ou l'expérience utilisateur.
                            Vous pouvez consulter le code source sur mon profil GitHub, ou cliquer sur chaque carte projet pour plus de détails.
                        </p>
                        <p className="text-gray-700 text-4xl p-10 mg-auto">
                         voir l'ensemble de mes projets :
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            {/*   Projets */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projets.map((pr, index) => (
                    <ProjetComponent key={index} index={index} {...pr} />
                ))}
            </div>
        </div>
    );
}
