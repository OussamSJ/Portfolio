import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar } from 'semantic-ui-react';
import { projets } from './projets/Projet';

class Navbar extends Component {

  state = {
    activeItem: 'accueil',
    sidebarVisible: false,
    projetDropdownOpen: false,
    sidebarProjetOpen: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };

  closeSidebar = () => {
    this.setState({ sidebarVisible: false });
  };

  toggleProjetDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(prev => ({ projetDropdownOpen: !prev.projetDropdownOpen }));
  };

  closeProjetDropdown = () => {
    this.setState({ projetDropdownOpen: false });
  };

  componentDidMount() {
    this.updateActiveItem();
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (e) => {
    if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
      this.closeProjetDropdown();
    }
  };

  updateActiveItem = () => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      this.setState({ activeItem: 'accueil' });
    } else if (pathname.startsWith('/projet')) {
      this.setState({ activeItem: 'projets' });
    } else if (pathname === '/formation') {
      this.setState({ activeItem: 'formation' });
    } else if (pathname === '/experiences-professionnelle') {
      this.setState({ activeItem: 'expériences' });
    } else if (pathname === '/cv') {
      this.setState({ activeItem: 'cv' });
    }
  };

  render() {
    const { activeItem, sidebarVisible, projetDropdownOpen, sidebarProjetOpen } = this.state;
    const projetsActive = activeItem === 'projets';

    return (
      <>
        <style>{`
          /* Container relatif pour le dropdown */
          .dropdown-container {
            position: relative;
            display: inline-flex;
            align-items: stretch;
          }

          /* Le MenuItem Projets custom — même rendu visuel que les vrais MenuItem Semantic */
          .projet-menu-item {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            color: rgba(0,0,0,.87);
            font-size: 1em;
            font-weight: 400;
            font-family: inherit;
            padding: .92857143em 1.14285714em;
            text-decoration: none;
            line-height: 1;
            border: none;
            background: none;
            transition: background .1s ease, color .1s ease;
            white-space: nowrap;
            /* Reproduit le style "active" de Semantic */
          }

          .projet-menu-item:hover {
            background: rgba(0,0,0,.05);
            color: rgba(0,0,0,.95);
          }

          .projet-menu-item.active {
            background: rgba(0,0,0,.05);
            color: rgba(0,0,0,.95);
            font-weight: 700;
          }

          /* Partie gauche : texte "Projets" cliquable → /projet */
          .projet-label {
            text-decoration: none;
            color: inherit;
          }

          /* Séparateur vertical léger entre texte et flèche */
          .projet-divider {
            width: 1px;
            height: 14px;
            background: rgba(0,0,0,0.15);
            margin: 0 4px;
          }

          /* Flèche */
          .projet-caret {
            font-size: 0.6em;
            opacity: 0.55;
            transition: transform 0.22s ease, opacity 0.2s;
            line-height: 1;
            display: flex;
            align-items: center;
          }

          .projet-caret.open {
            transform: rotate(180deg);
            opacity: 0.85;
          }

          /* Dropdown panel */
          .dropdown-menu {
            position: absolute;
            top: calc(100% + 4px);
            left: 0;
            min-width: 250px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);
            z-index: 200;
            overflow: hidden;
            animation: dropdownFade 0.18s ease;
            border: none;
          }

          @keyframes dropdownFade {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .dropdown-header {
            padding: 10px 16px 6px;
            font-size: 0.7em;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #aaa;
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            text-decoration: none;
            color: #3b3737;
            font-size: 0.92em;
            transition: background 0.15s ease, color 0.15s ease;
          }

          .dropdown-item:hover {
            background: #fff0f4;
            color: #f1356d;
          }

          .dropdown-item .item-img {
            width: 36px;
            height: 36px;
            border-radius: 6px;
            object-fit: cover;
            flex-shrink: 0;
          }

          .dropdown-item .item-info .item-title {
            font-weight: 600;
            display: block;
          }

          .dropdown-item .item-info .item-desc {
            font-size: 0.82em;
            color: #888;
            display: block;
            margin-top: 1px;
          }

          .dropdown-divider {
            height: 1px;
            background: #f3f3f3;
            margin: 4px 0;
          }

          .dropdown-all-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            font-size: 0.9em;
            font-weight: 700;
            color: #f1356d;
            text-decoration: none;
            transition: background 0.15s;
          }

          .dropdown-all-link:hover {
            background: #fff0f4;
          }

          /* ---- Sidebar mobile ---- */
          .sidebar-projet-header {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }

          .sidebar-projet-link {
            flex: 1;
            padding: 14px 8px 14px 16px;
            color: rgba(255,255,255,0.9) !important;
            text-decoration: none;
            font-size: 1em;
            display: block;
            transition: color 0.15s;
          }

          .sidebar-projet-link:hover,
          .sidebar-projet-link.active {
            color: #f1356d !important;
          }

          .sidebar-caret-btn {
            background: none;
            border: none;
            color: rgba(255,255,255,0.5);
            cursor: pointer;
            padding: 14px 16px;
            font-size: 0.75em;
            transition: transform 0.25s, color 0.15s;
            font-family: inherit;
          }

          .sidebar-caret-btn.open {
            transform: rotate(180deg);
            color: rgba(255,255,255,0.9);
          }

          .sidebar-sub {
            background: rgba(255,255,255,0.04);
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease;
          }
          .sidebar-sub.open {
            max-height: 500px;
          }
          .sidebar-sub-item {
            display: block;
            padding: 9px 16px 9px 32px;
            color: rgba(255,255,255,0.7) !important;
            font-size: 0.88em;
            text-decoration: none;
            transition: color 0.15s, background 0.15s;
          }
          .sidebar-sub-item:hover {
            color: #f1356d !important;
            background: rgba(255,255,255,0.05);
          }
        `}</style>

        {/* ---- Navbar Desktop ---- */}
        <nav className="navbar">
          <img src="/photo-portfolio.png" alt="logo" className="logo" />
          <h1>The OSJ Portfolio</h1>

          <div className="mobile-toggle" onClick={this.toggleSidebar}>
            <Icon name="bars" size="large" />
          </div>

          <div className="links desktop-only">
            <Menu secondary>

              <MenuItem
                name='accueil'
                active={activeItem === 'accueil'}
                onClick={this.handleItemClick}
                as="a"
                href="/"
              />

              {/* Projets : un seul bloc MenuItem custom avec texte + séparateur + flèche */}
              <div
                className="dropdown-container"
                ref={el => this.dropdownRef = el}
              >
                <div
                  className={`projet-menu-item${projetsActive ? ' active' : ''}`}
                  role="menuitem"
                >
                  {/* Clic sur le texte → navigate */}
                  <a
                    href="/projet"
                    className="projet-label"
                    onClick={() => this.setState({ activeItem: 'projets' })}
                  >
                    projets
                  </a>

                  {/* Séparateur fin */}
                  <span className="projet-divider" />

                  {/* Clic sur la flèche → toggle dropdown */}
                  <span
                    className={`projet-caret${projetDropdownOpen ? ' open' : ''}`}
                    onClick={this.toggleProjetDropdown}
                    aria-haspopup="true"
                    aria-expanded={projetDropdownOpen}
                    aria-label="Sous-menu projets"
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && this.toggleProjetDropdown(e)}
                  >
                    ▼
                  </span>
                </div>

                {projetDropdownOpen && (
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-header">Projets récents</div>

                    {projets.map((projet) => (
                      <a
                        key={projet.id}
                        href={`/projet/${projet.id}`}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => {
                          this.closeProjetDropdown();
                          this.setState({ activeItem: 'projets' });
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img src={projet.image} alt={projet.titre} className="item-img" />
                        <span className="item-info">
                          <span className="item-title">{projet.titre}</span>
                          <span className="item-desc">{projet.description.slice(0, 50)}…</span>
                        </span>
                      </a>
                    ))}

                    <div className="dropdown-divider" />

                    <a
                      href="/projet"
                      className="dropdown-all-link"
                      onClick={() => {
                        this.closeProjetDropdown();
                        this.setState({ activeItem: 'projets' });
                      }}
                    >
                      Voir tous les projets
                      <Icon name="arrow right" style={{ margin: 0 }} />
                    </a>
                  </div>
                )}
              </div>

              <MenuItem
                name='formation'
                active={activeItem === 'formation'}
                onClick={this.handleItemClick}
                as="a"
                href="/formation"
              />
              <MenuItem
                name='expériences'
                active={activeItem === 'expériences'}
                onClick={this.handleItemClick}
                as="a"
                href="/experiences-professionnelle"
              />
              <MenuItem
                name='cv'
                active={activeItem === 'cv'}
                onClick={this.handleItemClick}
                as="a"
                href="/cv"
              />

              <MenuMenu position='right'>
                <MenuItem
                  name='contact'
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                  as="a"
                  href="/#contact"
                  style={{
                    color: 'white',
                    fontSize: '1em',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '8px 14px',
                  }}
                >
                  Me contacter
                </MenuItem>
              </MenuMenu>
            </Menu>
          </div>
        </nav>

        {/* Overlay */}
        {sidebarVisible && (
          <div
            onClick={this.closeSidebar}
            className="sidebar-overlay"
            style={{
              position: 'fixed', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 100, cursor: 'pointer'
            }}
            aria-label="Fermer le menu"
          />
        )}

        {/* ---- Sidebar Mobile ---- */}
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={sidebarVisible}
          width='thin'
          direction='right'
          style={{ backgroundColor: '#3b3737', zIndex: 101, paddingTop: '20px' }}
          onHide={this.closeSidebar}
        >
          <MenuItem as="a" href="/" onClick={this.closeSidebar} active={activeItem === 'accueil'}>
            Accueil
          </MenuItem>

          {/* Projets mobile : lien + flèche dans le même bloc */}
          <div className="sidebar-projet-header">
            <a
              href="/projet"
              className={`sidebar-projet-link${activeItem === 'projets' ? ' active' : ''}`}
              onClick={this.closeSidebar}
            >
              Projets
            </a>
            <button
              className={`sidebar-caret-btn${sidebarProjetOpen ? ' open' : ''}`}
              onClick={() => this.setState(prev => ({ sidebarProjetOpen: !prev.sidebarProjetOpen }))}
              aria-label="Sous-menu projets"
            >
              ▼
            </button>
          </div>

          <div className={`sidebar-sub${sidebarProjetOpen ? ' open' : ''}`}>
            {projets.map((projet) => (
              <a
                key={projet.id}
                href={`/projet/${projet.id}`}
                className="sidebar-sub-item"
                onClick={this.closeSidebar}
              >
                — {projet.titre}
              </a>
            ))}
          </div>

          <MenuItem as="a" href="/formation" onClick={this.closeSidebar} active={activeItem === 'formation'}>
            Formation
          </MenuItem>
          <MenuItem as="a" href="/experiences-professionnelle" onClick={this.closeSidebar} active={activeItem === 'expériences'}>
            Expériences
          </MenuItem>
          <MenuItem as="a" href="/cv" onClick={this.closeSidebar} active={activeItem === 'cv'}>
            CV
          </MenuItem>
          <MenuItem as="a" href="/#contact" onClick={this.closeSidebar}
            style={{ color: '#f1356d', fontWeight: 700 }}
          >
            Me contacter
          </MenuItem>
        </Sidebar>
      </>
    );
  }
}

export default Navbar;