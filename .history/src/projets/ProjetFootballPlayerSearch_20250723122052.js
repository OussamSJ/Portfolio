
import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function ProjetFootballPlayerSearch() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">Football Player Search</h1>
            <Card>
                <Card.Img
                    variant="top"

                    className=" w-180 h-80 mx-auto"
                    src="/Kotlin.png"
                    alt="Logo of the Football Player Search Project"
                />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            Le projet <strong>Football Player Search</strong> est une application mobile Android conçue pour offrir une recherche intuitive et rapide d’informations sur les joueurs de football du monde entier. Elle permet aux utilisateurs de consulter des données détaillées telles que le nom, le club, la nationalité, l’âge ou encore la position des joueurs grâce à une interface moderne et épurée. Ce projet a été pensé pour offrir une expérience fluide, interactive et adaptée aux passionnés de football, aux recruteurs ou aux analystes.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            L’application est développée avec <strong>Kotlin</strong> sous <strong>Android Studio</strong>, et exploite les dernières recommandations en matière de design mobile grâce à <strong>Material Design 3 (Material You)</strong>. L’interface est à la fois esthétique, responsive et accessible, avec une navigation fluide entre les écrans, des composants dynamiques, et une architecture claire favorisant la maintenabilité.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            Côté données, l’application interagit avec une API externe de football (telle que API-Football) pour récupérer les informations en temps réel. L’utilisateur peut effectuer des recherches par nom de joueur, nationalité ou club, avec un système de filtres permettant de cibler rapidement les résultats. L’architecture repose sur des principes modernes (MVVM, coroutines, LiveData ou Flow) assurant une expérience fluide même lors des appels réseau.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            Ce projet met en avant une architecture modulaire et <strong>scalable</strong>, pensée pour évoluer facilement (ajout de favoris, stockage local, authentification, ou notifications push).
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            Le code source complet est disponible sur le lien GitHub ci-dessous. Ce projet témoigne de mes <strong>compétences en développement mobile Android</strong>moderne avec Kotlin, de ma capacité à intégrer des APIs REST tierces, et de ma volonté de construire des applications performantes, intuitives et professionnelles.
                        </p>
                        <p className="text-gray-700 font-bold text-3xl  mg-auto">
                            Lien pour Github :
                        </p>
                        <p className="text-gray-700 text-2xl p-10  mg-auto ">
                            <img src="/github.svg" alt="GitHub" className="w-10 h-10 inline-block"></img><a><Link to="https://github.com/OussamSJ/FootballPlayerSearch" className="text-blue-500 hover:underline">github.com/OussamSJ/FootballPlayerSearch</Link> </a> <br/></p>
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
