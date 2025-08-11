import ProjetComponent from "./ProjetComponent";
import Card from 'react-bootstrap/Card';
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function ProjetMachineLearningPrixDeVente() {
    return (
        <div className="relative max-w-6xl mx-auto my-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center p-8">
                Machine Learning - Prédire le Prix de Vente
            </h1>
            <Card>
                <Card.Img
                    variant="top"
                    className="w-full max-w-[800px] h-80 object-contain mx-auto"
                    src="/machine_learning.png"
                    alt="Logo du projet Machine Learning"
                />
                <Card.Body>
                    <Card.Text>
                        <p className="text-gray-700 text-2xl mb-6">
                            Ce projet <strong>Machine Learning - Prédire le Prix de Vente</strong> a été réalisé dans le cadre d’une <strong>mise en situation professionnelle</strong> visant à appliquer des méthodes de science des données à un problème concret : estimer le prix de vente de biens immobiliers à partir de données historiques.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>Périmètre :</strong> le projet couvre l’intégralité de la chaîne de traitement des données, depuis la collecte et le nettoyage, jusqu’à la modélisation et l’évaluation des performances. L’objectif est de fournir un modèle prédictif robuste et interprétable, utilisable dans un contexte réel par des agences ou plateformes immobilières.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>Modèle utilisé :</strong> RandomForestRegressor, un modèle d’arbres de décision en forêt aléatoire, choisi pour sa capacité à gérer des données complexes et à fournir des prédictions précises tout en limitant le surapprentissage.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>API :</strong> Une API REST a été conçue avec Flask pour exposer le modèle et permettre des prédictions en temps réel à partir de données clients. Cette API facilite l’intégration du modèle dans des applications externes ou des systèmes de gestion immobilière.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>Technologies et outils :</strong> Python, Pandas, NumPy, Scikit-learn, Flask, Matplotlib, Seaborn, et Jupyter Notebook pour l’expérimentation et la visualisation.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>Méthodologie :</strong> Démarche CRISP-DM comprenant exploration des données, ingénierie des variables, traitement des valeurs manquantes, sélection de variables pertinentes, optimisation des hyperparamètres via validation croisée.
                        </p>
                        <p className="text-gray-700 text-2xl mb-6">
                            <strong>Enjeux :</strong> Améliorer la précision des estimations pour aider à la prise de décision, optimiser les marges, et anticiper les tendances du marché immobilier. Ce projet illustre mes <strong>compétences en machine learning appliqué</strong>, mon savoir-faire en manipulation de données, et ma capacité à déployer des solutions complètes via API.
                        </p>

                        <p className="text-gray-700 font-bold text-3xl mb-4">
                            Lien vers le GitHub :
                        </p>
                        <p className="text-gray-700 text-2xl mb-12">
                            <img src="/github.svg" alt="GitHub" className="w-10 h-10 inline-block mr-2 align-middle" />
                            <a href="https://github.com/OussamSJ/Machine_Learning-Predire_Prix_DeVente" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline align-middle">
                                github.com/OussamSJ/Machine_Learning-Predire_Prix_DeVente
                            </a>
                        </p>

                        <p className="text-gray-700 font-bold text-3xl mb-10">
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
