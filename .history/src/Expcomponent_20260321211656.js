import { motion } from "framer-motion";

export default function Expcomponent({ titre, entreprise, date, image, description, index }) {
  return (
    <motion.div
      className="relative pl-10 border-l-2 border-primary mb-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full border-4 border-primary shadow" />
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-xl font-semibold">{titre}</h3>
      <img src={image} alt="entreprise" className="w-16 h-16 rounded-full mt-2" />
      <p className="text-sm text-gray-600">{entreprise}</p>
      <p className="text-gray-700 mt-2">{description}</p><br />
    </motion.div>
  );  
}
