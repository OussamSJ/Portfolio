import { motion } from "framer-motion";

export default function ProjetComponent({ titre, ecole, date, image, index }) {
  const isRight = index % 2 === 0;

  {/* animation avec motion  */ }
  return (
    <div className="border rounded-xl shadow p-4 max-w-sm">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
    <h3 className="text-xl font-bold mt-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <Link to={`/projects/${id}`} className="text-blue-600 mt-2 inline-block">
      Voir le projet →
    </Link>
  </div>
  );
}
