import { useParams } from "react-router-dom";
import { projets } from "./Projet";
import Projet1 from "./Projet1";
import ProjetFootballPlayerSearch from  "./ProjetFootballPlayerSearch";
import Projet3 from "./Projet3";

export default function ProjetDetail() {
  const { id } = useParams();
  const projet = projets.find(p => p.id === id);

  if (!projet) return <div>Projet introuvable</div>;

  switch (id) {
    case '1': return <Projet1 />;
    case '2': return <ProjetFootballPlayerSearch />;
    case '3': return <Projet3/>;
    case '4': return <ProjetGameUpAPI />;
    // Ajoute d'autres cas selon les projets
    default: return <div>Projet non défini</div>;
  }
}
