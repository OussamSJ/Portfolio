import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function Projet3() {
    return (
        <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">
                Machine Learning - Prédire le prix de vente de l'immobilier
            </h1>
            <Card>
                <Card.Img
                    variant="top"
                    className="w-200 h-80 mx-auto"
                    src="/machine_learning.png"
                    alt="Logo du projet Machine Learning"
                />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Contexte du projet :</strong>Ce projet <strong>Machine Learning </strong> a été réalisé dans le cadre d’une <strong>mise en situation professionnelle</strong> visant à prédire la valeur foncière d'un bien immobilier à Toulouse en fonction de diverses caractéristiques telles que la surface du terrain, la surface bâtie, le code postal, et la voie (nom de la rue). L'application utilise un modèle d'apprentissage automatique pour fournir des estimations précises du prix de vente.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Périmètre :</strong> le projet couvre l’intégralité de la chaîne de traitement des données, depuis la collecte et le nettoyage, jusqu’à la modélisation et l’évaluation des performances. L’objectif est de fournir un modèle prédictif robuste et interprétable. Une API REST a été conçue pour exposer le modèle et permettre des prédictions en temps réel à partir des données clients renseignées. Cette API, sécurisée et documentée, possède une interface web facilitant une utilisation simple et efficace. Elle permet également une intégration aisée dans des applications externes ou des systèmes de gestion immobilière.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Modèle utilisé :</strong> RandomForestRegressor, un modèle d’arbres de décision en forêt aléatoire, choisi pour sa capacité à gérer des données complexes et à fournir des prédictions précises tout en limitant le surapprentissage.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Technologies et outils :</strong> Python, Pandas, NumPy, Scikit-learn, Flask pour l’API, Matplotlib, Seaborn, et Google Colab pour l’expérimentation et la visualisation.
                        </p>

                        <p className="text-gray-700 font-bold text-3xl mg-auto">
                            Lien vers le GitHub :
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <img src="/github.svg" alt="GitHub" className="w-10 h-10 inline-block" />
                            <a>
                                <Link 
                                    to="https://github.com/OussamSJ/Machine_Learning-Predire_Prix_DeVente" 
                                    className="text-blue-500 hover:underline"
                                >
                                    github.com/OussamSJ/Machine_Learning-Predire_Prix_DeVente
                                </Link>
                            </a>
                            <br/>
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
