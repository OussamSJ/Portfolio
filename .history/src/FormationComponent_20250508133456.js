import { motion } from "framer-motion";

export default function FormationComponent({ titre, ecole, date, image, index }) {
  const isRight = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-10  border-primary-300 transform -translate-x-1/2
        ${isRight ? "pl-10 border-l-2 text-left mr-auto" : "pr-10 border-r-2 text-right justify-start ml-auto"}
      `}
      initial={{ opacity: 0, x: isRight ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={`absolute top-0 left-1/2 w-6 h-6  bg-white rounded-full border-2 transform -translate-x-1/2 border-primary`}/>
      <p className="text-sm text-gray-500  mx-auto ">{date}</p>
      <h3 className="text-xl font-semibold">{ecole}</h3>
      <img src={image} alt="entreprise" className="w-16 h-16 rounded-full mt-2 mx-auto" />
      <p className="text-sm text-gray-600">{titre}</p>
      <br />
    </motion.div>
  );
}
