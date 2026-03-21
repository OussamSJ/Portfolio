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

  closeProjetDropdown = () => {
    this.setState({ projetDropdownOpen: false });
  };

  handleOutsideClick = (e) => {
    if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
      this.closeProjetDropdown();
    }
  };

  componentDidMount() {
    this.updateActiveItem();
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  updateActiveItem = () => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      this.setState({ activeItem: 'accueil' });
    } else if (pathname.startsWith('/projet/')) {
      const id = pathname.split('/projet/')[1];
      this.setState({ activeItem: `projet-${id}`, sidebarProjetOpen: true });
    } else if (pathname === '/projet') {
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
    const isProjetsActive = activeItem === 'projets' || activeItem.startsWith('projet-');

    return (
      <>
        <style>{`
          /* ===== DROPDOWN DESKTOP ===== */
          .dropdown-container {
            position: relative;
            display: inline-flex;
            align-items: stretch;
          }

         /* Reproduit exactement le rendu d'un MenuItem Semantic UI secondary */
          .projet-menu-item {
            display: inline-flex;
            align-items: center;
            padding: .92857143em 1.14285714em;
            cursor: pointer;
            font-size: 1em;
            font-weight: 400;
            font-family: inherit;
            color: rgba(0,0,0,.87);
            line-height: 1;
            border: none;
            background: none;
            transition: color .1s ease;
            white-space: nowrap;
            border-radius: 0;
            gap: 6px;
          }

          .projet-menu-item:hover {
            color: rgba(0,0,0,.95);
            background: rgba(0,0,0,0.05);
          }

          .projet-menu-item.active {
            color: rgba(0,0,0,.95);
            font-weight: 700;
          }

          .projet-label {
            text-decoration: none;
            color: inherit;
          }

          .projet-separator {
            width: 1px;
            height: 12px;
            background: rgba(0,0,0,0.18);
            flex-shrink: 0;
          }


          .projet-caret {
            font-size: 0.58em;
            opacity: 0.5;
            transition: transform 0.22s ease, opacity 0.2s;
            line-height: 1;
            display: flex;
            align-items: center;
            user-select: none;
          }

          .projet-caret.open {
            transform: rotate(180deg);
            opacity: 0.85;
          }

          /* Panel dropdown */
          .dropdown-panel {
            position: absolute;
            top: calc(100% + 4px);
            left: 0;
            min-width: 260px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);
            z-index: 200;
            overflow: hidden;
            animation: panelFade 0.16s ease;
          }

          @keyframes panelFade {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .panel-header {
            padding: 10px 16px 6px;
            font-size: 0.68em;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            color: #bbb;
          }

          .panel-item {
            display: flex;
            align-items: center;
            gap: 11px;
            padding: 9px 16px;
            text-decoration: none;
            color: #3b3737;
            font-size: 0.91em;
            transition: background 0.13s, color 0.13s;
          }

          .panel-item:hover {
            background: #fff0f4;
            color: #f1356d;
          }

          .panel-item.current {
            background: #fff0f4;
            color: #f1356d;
            font-weight: 700;
          }

          .panel-item .pi-img {
            width: 34px;
            height: 34px;
            border-radius: 6px;
            object-fit: cover;
            flex-shrink: 0;
          }

          .panel-item .pi-info .pi-title {
            font-weight: 600;
            display: block;
          }

          .panel-item .pi-info .pi-desc {
            font-size: 0.8em;
            color: #999;
            display: block;
            margin-top: 1px;
          }

          .panel-item.current .pi-info .pi-desc {
            color: #f1356d99;
          }

          .panel-divider {
            height: 1px;
            background: #f3f3f3;
            margin: 3px 0;
          }

          .panel-all {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            font-size: 0.9em;
            font-weight: 700;
            color: #f1356d;
            text-decoration: none;
            transition: background 0.13s;
          }

          .panel-all:hover {
            background: #fff0f4;
          }

          /* ===== SIDEBAR MOBILE ===== */
          .sidebar-projet-header {
            display: flex;
            align-items: stretch;
          }

          .sidebar-projet-link {
            flex: 1;
            padding: 14px 6px 14px 16px;
            color: rgba(255,255,255,0.9) !important;
            text-decoration: none;
            font-size: 1em;
            display: flex;
            align-items: center;
            transition: color 0.15s, background 0.15s;
          }

          .sidebar-projet-link:hover {
            background: rgba(255,255,255,0.06);
          }

          .sidebar-projet-link.active {
            color: #f1356d !important;
            font-weight: 700;
          }

          .sidebar-caret-btn {
            background: none;
            border: none;
            border-left: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.45);
            cursor: pointer;
            padding: 0 16px;
            font-size: 0.72em;
            transition: transform 0.25s, color 0.15s, background 0.15s;
            font-family: inherit;
            display: flex;
            align-items: center;
          }

          .sidebar-caret-btn:hover {
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.85);
          }

          .sidebar-caret-btn.open {
            transform: rotate(180deg);
            color: rgba(255,255,255,0.9);
          }

          .sidebar-sub {
            background: rgba(0,0,0,0.15);
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease;
          }

          .sidebar-sub.open {
            max-height: 600px;
          }

          .sidebar-sub-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 16px 10px 28px;
            color: rgba(255,255,255,0.65) !important;
            font-size: 0.88em;
            text-decoration: none;
            transition: color 0.15s, background 0.15s;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }

          .sidebar-sub-item:last-child {
            border-bottom: none;
          }

          .sidebar-sub-item:hover {
            color: #f1356d !important;
            background: rgba(255,255,255,0.05);
          }

          .sidebar-sub-item.current {
            color: #f1356d !important;
            background: rgba(241,53,109,0.1);
            font-weight: 700;
          }

          .sidebar-sub-item .sub-img {
            width: 28px;
            height: 28px;
            border-radius: 5px;
            object-fit: cover;
            flex-shrink: 0;
            opacity: 0.85;
          }

          .sidebar-sub-item.current .sub-img {
            opacity: 1;
          }

          .sub-active-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #f1356d;
            flex-shrink: 0;
            margin-left: auto;
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

              {/* ---- Projets : MenuItem unifié ---- */}
              <div
                className="dropdown-container"
                ref={el => this.dropdownRef = el}
              >
                <MenuItem
                  name='projets'
                  active={isProjetsActive}
                  as="div"
                  style={{ padding: 0 }}
                >
                  <div className={`projet-menu-item${isProjetsActive ? ' active' : ''}`}>
                    <a
                      href="/projet"
                      className="projet-label"
                      onClick={() => this.setState({ activeItem: 'projets', projetDropdownOpen: false })}
                    >
                      projets
                    </a>
                    <span className="projet-separator" />
                    <span
                      className={`projet-caret${projetDropdownOpen ? ' open' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState(prev => ({ projetDropdownOpen: !prev.projetDropdownOpen }));
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          this.setState(prev => ({ projetDropdownOpen: !prev.projetDropdownOpen }));
                        }
                      }}
                      aria-label="Ouvrir le sous-menu projets"
                    >
                      ▼
                    </span>
                  </div>
                </MenuItem>

                {projetDropdownOpen && (
                  <div className="dropdown-panel" role="menu">
                    <div className="panel-header">Projets récents</div>

                    {projets.map((projet) => {
                      const isCurrent = activeItem === `projet-${projet.id}`;
                      return (
                        <a
                          key={projet.id}
                          href={`/projet/${projet.id}`}
                          className={`panel-item${isCurrent ? ' current' : ''}`}
                          role="menuitem"
                          onClick={() => {
                            this.closeProjetDropdown();
                            this.setState({ activeItem: `projet-${projet.id}` });
                            window.scrollTo(0, 0);
                          }}
                        >
                          <img src={projet.image} alt={projet.titre} className="pi-img" />
                          <span className="pi-info">
                            <span className="pi-title">{projet.titre}</span>
                            <span className="pi-desc">{projet.description.slice(0, 48)}…</span>
                          </span>
                          {isCurrent && <Icon name="check circle" style={{ color: '#f1356d', margin: '0 0 0 auto' }} />}
                        </a>
                      );
                    })}

                    <div className="panel-divider" />

                    <a
                      href="/projet"
                      className="panel-all"
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
              {/* ---- fin Projets ---- */}

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

          {/* Projets mobile : lien + flèche dans le même bloc visuel */}
          <div className="sidebar-projet-header">
            <a
              href="/projet"
              className={`sidebar-projet-link${isProjetsActive ? ' active' : ''}`}
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

          {/* Sous-items avec indicateur de page active */}
          <div className={`sidebar-sub${sidebarProjetOpen ? ' open' : ''}`}>
            {projets.map((projet) => {
              const isCurrent = activeItem === `projet-${projet.id}`;
              return (
                <a
                  key={projet.id}
                  href={`/projet/${projet.id}`}
                  className={`sidebar-sub-item${isCurrent ? ' current' : ''}`}
                  onClick={this.closeSidebar}
                >
                  <img src={projet.image} alt={projet.titre} className="sub-img" />
                  <span className='text-white'>{projet.titre}</span>
                  {isCurrent && <span className="sub-active-dot" title="Page actuelle" />}
                </a>
              );
            })}
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
          <MenuItem
            as="a"
            href="/#contact"
            onClick={this.closeSidebar}
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