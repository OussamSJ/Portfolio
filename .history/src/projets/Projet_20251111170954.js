
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';

export const projets = [
    {
        id: '1',
        titre: 'Project management tool',
        description: 'Un site personnel développé avec React et Tailwind CSS.',
        description_longue: 'Ce portfolio présente mes compétences, expériences et projets. Il est entièrement responsive et utilise React pour une navigation fluide. Le design est réalisé avec Tailwind CSS pour une personnalisation rapide et efficace.',
        image: "/logo-pmt.png",
    },
    {
        id: '2',
        titre: 'Football Player Search',
        description: 'une application mobile Android développée avec Kotlin.',
        description_longue: 'une application mobile Android conçue pour offrir une recherche intuitive et rapide d’informations sur les joueurs de football du monde entier.',
        image: '/Kotlin.PNG',
    },
    {
        id: '3',
        titre: 'Machine Learning - Prédire le Prix de Vente immobilier',
        description: 'Modèle de maching learning conçu pour anticiper les tendances du marché immobilier.',
        description_longue: 'Améliorer la précision des estimations afin d’aider à la prise de décision pour la mise en vente, optimiser les marges, et anticiper les tendances du marché immobilier. Ce projet illustre mes compétences en machine learning, mon savoir-faire en manipulation de données complexes, et ma capacité à transformer des insights en solutions concrètes.',
        image: '/machine_learning.png',
    },
    {
        id: '4',
        titre: 'API Node.js',
        description: 'API REST sécurisée pour la gestion de produits.',
        description_longue: 'Cette API permet de gérer les produits d\'une boutique en ligne, avec des fonctionnalités de création, lecture, mise à jour et suppression (CRUD). Elle est sécurisée avec JWT et utilise MongoDB pour le stockage des données.',
        image: '/images/api.png',
    },
];

export default function Projet() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">Mes Projets</h1>
            <Card>
                <Card.Img variant="top" className=" w-200 h-80 mx-auto" src="projects_image.png" />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10  mg-auto ">
                            Cette section regroupe l’ensemble de mes projets réalisés au cours de mon parcours en développement logicielle.
                            Ils couvrent des domaines variés : développement web frontend, développement web backend, microservices, systèmes distribués, projets scolaires, scripts utilitaires et expérimentations personnelles.
                            Chaque projet illustre une compétence ou un apprentissage spécifique, que ce soit dans l’architecture logicielle, l’intégration continue, l’optimisation ou l'expérience utilisateur.
                            Vous pouvez consulter le code source sur mon profil GitHub, ou cliquer sur chaque carte projet pour plus de détails.
                        </p>
                        <p className="text-gray-700 font-bold text-3xl mb-20 mg-auto">
                            voir les autre projets :
                        </p>

                        {/*   Projets */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projets
                                .sort(() => Math.random() - 0.5)
                                .map((pr, index) => (
                                    <ProjetComponent key={index} index={index} {...pr} />
                                ))}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />


        </div>
    );
}
