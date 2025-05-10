
const Footbar = () => {
  return (
    <div className="footbar">
     {/* footbar buttom  */}
      <footer class="portfolio-footer">

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">À propos</h4>
              <p class="card-text">Développeur Web passionné, créant des expériences utilisateur fluides.</p>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Liens utiles</h4>
              <ul class="social-links" >
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">CV</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Suivez-moi</h4>
              <ul class="social-links">
                <li><a href="https://github.com/OussamSJ#"> <img src="github.svg" alt="GitHub"></img></a></li>
                <li><a href="https://www.linkedin.com/in/oussama-sj/  "> <img src="linkedin.svg" alt="LinkedIn"></img></a></li>
                <li><a href="https://www.instagram.com/oussama.sj/"> <img src="instagram.svg" alt="Instagram"></img></a></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
      <div class="footer-bottom">
        <p>© 2025 Oussama SEYID JEBARI <br /> Tous droits réservés.</p>
      </div>

    </div>

  );
}

export default Footbar;
