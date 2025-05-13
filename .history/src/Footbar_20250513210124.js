
const Footbar = () => {
  return (
    <div className="footbar">
      {/* footbar  */}
      <footer className="portfolio-footer">

      <div className="card-deck">
        <div className="card">
        <div className="card-body">
          <h4 className="card-title">À propos</h4>
          <p className="card-text">Développeur Web passionné, créant des expériences utilisateur fluides.</p>
        </div>
        </div>
      </div>

      <div className="card-deck">
        <div className="card">
        <div className="card-body">
          <h4 className="card-title">Liens utiles</h4>
          <ul className="social-links">

          <li><a href="/">Accueil</a></li>
          <li><a href="/projet">Projet</a></li>
          <li><a href="/cv">CV</a></li>
          <li><a href="/formation">Formations</a></li>
          
          </ul>
        </div>
        </div>
      </div>

      <div className="card-deck">
        <div className="card">
        <div className="card-body">
          <h4 className="card-title">Suivez-moi</h4>
          <ul className="social-links">
          <li><a href="https://github.com/OussamSJ"> <img src="/github.svg" alt="GitHub"></img></a></li>
          <li><a href="https://www.linkedin.com/in/oussama-sj/"> <img src="/linkedin.svg" alt="LinkedIn"></img></a></li>
          <li><a href="https://www.instagram.com/oussama.sj/"> <img  src="/instagram.svg" alt="Instagram" width="60" height="60"></img></a></li>
          </ul>
        </div>
        </div>
      </div>

      </footer>
      <div className="footer-bottom">
      <p>© 2025 Oussama SEYID JEBARI <br /> Tous droits réservés.</p>
      </div>

    </div>

    );
}

export default Footbar;
