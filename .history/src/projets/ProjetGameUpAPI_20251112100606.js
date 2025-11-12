import ProjetComponent from "./ProjetComponent";
import Card from "react-bootstrap/Card";
import { projets } from "./Projet";
import { Link } from "react-router-dom";

export default function ProjetGameUpAPI() {
  return (
    <div className="relative max-w-6xl mx-auto py-auto px-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-8 text-center p-8">
        GamesUp - API Spring Boot pour la plateforme GamesUP
      </h1>
      <Card>
        <Card.Img
          variant="top"
          className="w-200 h-80 mx-auto"
          src="/GameUp-image.png"
          alt="Illustration du projet GameUp API"
        />
        <Card.Body>
          <Card.Text>
            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Présentation générale : </strong>  
              Le projet <strong>GameUp API</strong> s’inscrit dans une étude de cas complète autour de la
              <strong> refonte d’une plateforme de vente de jeux de société en ligne</strong>.  
              L’objectif principal était de concevoir et de développer une nouvelle architecture backend
              <strong> moderne, sécurisée et évolutive</strong>, capable de supporter la croissance de la plateforme
              et d’intégrer un <strong>système de recommandation intelligent</strong> basé sur le Machine Learning.
            </p>

            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Enjeux et objectifs :</strong> <br/> <br/>
              - Concevoir une <strong>API REST modulaire et maintenable</strong>.<br/>  
              - Garantir la <strong>sécurité des accès</strong> et la gestion des rôles (client / administrateur).  <br/>
              - Mettre en œuvre un <strong>système de recommandation de jeux</strong> personnalisé en interaction avec une API Python.  <br/>
              - Respecter les <strong>principes SOLID</strong> et les bonnes pratiques d’architecture logicielle.  <br/>
              - Fournir une <strong>documentation technique et des tests</strong> garantissant la qualité du logiciel.
            </p>

            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Architecture logicielle : </strong>  
              L’API repose sur une architecture multicouche <strong>Controller – Service – Repository</strong> assurant
              la séparation des responsabilités et la maintenabilité du code.  
              Elle implémente les technologies et outils suivants :
              <ul className="list-disc ml-10 mt-2">
                <li><strong>Spring Boot</strong> pour le développement de l’API REST.</li>
                <li><strong>Spring Data JPA / Hibernate</strong> pour la gestion des entités et la persistance des données.</li>
                <li><strong>Maven</strong> pour automatiser la gestion et la construction du projet.</li>
                <li><strong>PostgreSQL</strong> comme base de données relationnelle.</li>
                <li><strong>Swagger UI</strong> pour la documentation interactive.</li>
                <li><strong>Docker</strong> pour la conteneurisation et le déploiement.</li>
              </ul>
            </p>

            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Sécurité et qualité : </strong>  
              Le projet intègre <strong>Spring Security</strong> avec une authentification par <strong>JWT (JSON Web Token)</strong> permettant
              une gestion des rôles et permissions.  
              Des tests unitaires et d’intégration ont été développés avec <strong>JUnit et MockMvc</strong> afin de
              garantir la fiabilité et la non-régression du code.  
              Une attention particulière a été portée à la <strong>qualité du code, la couverture de tests</strong> et
              la <strong>documentation technique</strong>.
            </p>

            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Intégration du système de recommandation :</strong>  
              L’API GameUp communique avec une seconde API développée en <strong>Python (FastAPI)</strong>,
              dédiée à l’analyse des données utilisateurs et à la génération de recommandations.  
              Le modèle de Machine Learning implémenté repose sur l’algorithme <strong>K-Nearest Neighbors (KNN)</strong>,
              permettant de recommander des jeux similaires à ceux achetés ou consultés.  
              Cette intégration inter-API illustre la capacité à concevoir un <strong>système distribué et interopérable</strong>.
            </p>

            <p className="text-gray-700 text-2xl p-10 mg-auto">
              <strong>Résultats et livrables :</strong>  
              Le projet a permis de livrer une API <strong>fonctionnelle, testée et documentée</strong>, prête à être
              intégrée au front-end Angular existant.  
              Il inclut également une documentation complète :
              <ul className="list-disc ml-10 mt-2">
                <li>Diagrammes d’architecture, de classes, de composants et de séquence.</li>
                <li>Rapport de conformité aux principes SOLID et aux bonnes pratiques.</li>
                <li>Explication détaillée du système de recommandation et des échanges inter-API.</li>
              </ul>
            </p>

            <p className="text-gray-700 text-2xl font-bold p-10 mb-0 mg-auto">
              Lien vers le GitHub :
            </p>
            <p className="text-gray-700 text-2xl p-10 mb-20 mg-auto">
              <img
                src="/github.svg"
                alt="GitHub"
                className="w-10 h-10 inline-block"
              />
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
