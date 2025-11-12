import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function ProjetGameUpAPI() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">
                GameUp API 
            </h1>
            <Card>
                <Card.Img
                    variant="top"
                    className="w-200 h-80 mx-auto"
                    src="/GameUP-image.png"
                    alt="Logo du projet GameUp API"
                />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Contexte du projet :</strong> Ce projet <strong>GameUp API</strong> est une <strong>API RESTful développée avec Spring Boot</strong>, permettant de collecter les données des utilisateurs et de leurs achats de jeux vidéo, afin de générer des <strong>recommandations personnalisées</strong>.  
                            L’objectif est de proposer un moteur de recommandation efficace, extensible et performant.
                        </p>

                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Périmètre :</strong> L’API gère la réception, le traitement et la persistance des données utilisateurs et jeux, ainsi que la génération de suggestions de jeux similaires.  
                            Le projet inclut la <strong>documentation Swagger</strong>, la gestion des exceptions, et une structure modulaire facilitant la maintenance et l’intégration future d’algorithmes de Machine Learning.
                        </p>

                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Architecture :</strong> Conçue selon les principes REST et une architecture multicouche, l’application s’appuie sur <strong>Spring Boot</strong> et <strong>JPA</strong> pour la gestion des entités, avec une <strong>base de données relationnelle</strong> et une logique métier claire séparée du contrôleur.
                        </p>

                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Technologies et outils :</strong> Java, Spring Boot, JPA/Hibernate, PostgreSQL, Swagger UI, Maven, et Docker.  
                            Hébergée localement ou sur un serveur, l’API peut être couplée à un front-end React ou Angular pour offrir une expérience complète.
                        </p>

                        <p className="text-gray-700 text-2xl font-bold p-10 mb-0 mg-auto">
                            Lien vers le GitHub :
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mb-20 mg-auto ">
                            <img src="/github.svg" alt="GitHub" className="w-10 h-10 inline-block" />
                            <a>
                                <Link
                                    to="https://github.com/OussamSJ/GameUp-API-Spring"
                                    className="text-blue-500 hover:underline"
                                >
                                    github.com/OussamSJ/GameUp-API-Spring
                                </Link>
                            </a>
                        </p>

                        <p className="text-gray-700 font-bold text-3xl mb-20 mg-auto">
                            Voir les autres projets :
                        </p>
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
