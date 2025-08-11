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
                            Ce projet <strong>Machine Learning </strong> a été réalisé dans le cadre d’une <strong>mise en situation professionnelle</strong> visant à appliquer des méthodes de science des données à un problème concret : estimer le prix de vente de biens immobiliers à partir de données historiques.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Périmètre :</strong> le projet couvre l’intégralité de la chaîne de traitement des données, depuis la collecte et le nettoyage, jusqu’à la modélisation et l’évaluation des performances. L’objectif est de fournir un modèle prédictif robuste et interprétable, utilisable dans un contexte réel par des agences ou plateformes immobilières.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Modèle utilisé :</strong> RandomForestRegressor, un modèle d’arbres de décision en forêt aléatoire, choisi pour sa capacité à gérer des données complexes et à fournir des prédictions précises tout en limitant le surapprentissage.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>API :</strong> Une API REST a été conçue pour exposer le modèle et permettre des prédictions en temps réel à partir de données clients renseignées. Cette API facilite l’intégration du modèle dans des applications externes ou des systèmes de gestion immobilière. Cette API est sécurisée et documentée, possédant une interface web et permettant une utilisation simple et efficace.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Technologies et outils :</strong> Python, Pandas, NumPy, Scikit-learn, Flask pour l’API, Matplotlib, Seaborn, et Google Colab pour l’expérimentation et la visualisation.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Méthodologie :</strong> Démarche CRISP-DM comprenant exploration des données, ingénierie des variables, traitement des valeurs manquantes, sélection de variables pertinentes, optimisation des hyperparamètres via validation croisée.
                        </p>
                        <p className="text-gray-700 text-2xl p-10 mg-auto">
                            <strong>Enjeux :</strong> Améliorer la précision des estimations pour aider à la prise de décision, optimiser les marges, et anticiper les tendances du marché immobilier. Ce projet illustre mes <strong>compétences en machine learning appliqué</strong>, mon savoir-faire en manipulation de données, et ma capacité à déployer des solutions complètes via API.
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
