
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function Projet1() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">Project management tool</h1>
            <Card>
            <Card.Img 
                variant="top"  
                src="/logo-pmt.png" 
                alt="Logo of the Project Management Tool application"
            />
            <Card.Body>
                <Card.Text>
                <p className="text-gray-700 text-2xl p-10  mg-auto ">
                    Le projet PMT – Project Management Tool est une application web complète dédiée à la gestion de projets, conçue pour aider les équipes à mieux collaborer, planifier et suivre l’avancement de leurs tâches via des notifications en temps réel. Cette plateforme repose sur une architecture moderne combinant Angular pour le frontend et Spring Boot pour le backend, offrant ainsi une interface utilisateur fluide, intuitive et hautement réactive, couplée à une API robuste et sécurisée.
                    Côté frontend, l'application est développée avec Angular 16+ et utilise la bibliothèque Bootstrap pour offrir une expérience utilisateur moderne et responsive. </p>
                <p className="text-gray-700 text-2xl p-10  mg-auto ">
                    La gestion des formulaires repose sur des formulaires réactifs avec une validation dynamique. Le frontend communique avec l’API REST du backend, tout en assurant une navigation fluide de type Single Page Application.
                    Le backend, quant à lui, est bâti avec Spring Boot et met en œuvre une API RESTful sécurisée par Spring Security avec authentification via JSON Web Tokens (JWT). L’accès aux données est géré grâce à Spring Data JPA et Hibernate, avec une base de données relationnelle MySQL. Une documentation interactive de l’API est disponible via Swagger, facilitant l’intégration et les tests. </p>
                <p className="text-gray-700 text-2xl p-10  mg-auto "></p>
                        <p className="text-gray-700 font-bold text-3xl  mg-auto">
                            Lien pour Github :
                        </p>
                        <p className="text-gray-700 text-2xl p-10  mg-auto ">
                        
                        <img src="/github.svg" alt="GitHub"></img> <a><Link to="https://github.com/OussamSJ/Angular-PMT-FrontEnd" className="text-blue-500 hover:underline">github.com/OussamSJ/Pmt</Link></a> </p>
             

                        <p className="text-gray-700 font-bold text-3xl mb-20 mg-auto">
                            voir les autres projets :
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
        </div >
    );
}
