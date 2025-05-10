import Navbar from "./Navbar";
import Footbar from "./Footbar";

const Cv = () => {
  return (
    <div className="CV">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8"> <br/>Mon CV - Curriculum vitæ</h1>

      <div style={{ height: '200vh', padding: '20px', margin: '0 auto' , relative: 'relative' }}>
        <iframe
          src="cv.pdf" // Placez le fichier dans le dossier `public/`
          width="100%"
          height="100%"
          title="CV PDF"
          style={{ border: 'none',   objectFit: 'contain' , display:'flex', margin: '0 auto' , justifyContent:'center',  display: 'flex', maxWidth: '80%', maxHeight: '80vh' }}
        />
      </div>

      <Footbar />
    </div>
  );
};

export default Cv;
