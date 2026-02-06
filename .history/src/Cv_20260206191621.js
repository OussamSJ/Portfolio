import Navbar from "./Navbar";
import Footbar from "./Footbar";
import { motion } from "framer-motion";



const Cv = () => {
  return (
    <div className="CV">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8"> <br/>Mon CV - Curriculum vitæ</h1>

      <div style={{ height: '170vh', padding: '20px', margin: '0 auto' , display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <iframe
          src="cv.pdf" 
          width="100%"
          height="100%"
          title="CV PDF"
          style={{ border: 'none',   objectFit: 'contain' , margin: '0 auto' , justifyContent:'center',  display: 'flex', maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
            {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-primary to-pink-500 text-white p-8 rounded-lg shadow-xl text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          <h3 className="text-2xl font-bold">Prêt à démarrer votre projet ?</h3>
        </div>
        <p className="text-lg mb-6">
          Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300 shadow-xl border-2 border-white"
        >
          Me contacter
        </a>
      </motion.div>

      <Footbar />
    </div>
  );
};

export default Cv;
