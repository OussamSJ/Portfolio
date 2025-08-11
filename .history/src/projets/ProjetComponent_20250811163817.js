import { Link } from 'react-router-dom';

export default function ProjetComponent({ id, titre,  image, description, description_longue }) {



  return (
    <div className="border  shadow p-4 max-w-sm">
    <img src={image} alt={titre} className="w-full h-40 object-cover rounded-md" />
    <h3 className="text-xl font-bold mt-2">{titre}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <Link to={`/projet/${id}`} className="text-[#f1356d] mt-2 inline-block">
      Voir le projet →
    </Link>
  </div>
  );
}
