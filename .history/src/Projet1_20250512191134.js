// pages/Formations.jsx
import { div, i } from "framer-motion/client";
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";

export default function Projet1() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">Project management tool</h1>
            <Card>
                <Card.Img variant="top" src="logo-pmt.png" />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10  mg-auto ">
                            Cette section regroupe l’ensemble de mes projets réalisés au cours de mon parcours en développement logicielle.
                            Ils couvrent des domaines variés : développement web frontend, développement web backend, microservices, systèmes distribués, projets scolaires, scripts utilitaires et expérimentations personnelles.
                            Chaque projet illustre une compétence ou un apprentissage spécifique, que ce soit dans l’architecture logicielle, l’intégration continue, l’optimisation ou l'expérience utilisateur.
                            Vous pouvez consulter le code source sur mon profil GitHub, ou cliquer sur chaque carte projet pour plus de détails.
                        </p>
                        <p className="text-gray-700 font-bold text-3xl mb-20 mg-auto">
                            voir l'ensemble de mes projets :
                        </p>

                        {/*   Projets */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projets.map((pr, index) => (
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
