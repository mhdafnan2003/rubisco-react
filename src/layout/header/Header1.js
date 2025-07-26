import Link from "next/link";
import Menu from "../Menu";

const Header1 = () => {
  return (
    <header className="header-area header-one transparent-header">
      {/*====== Header Navigation ======*/}
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="Site Logo"
                     style={{ width: "120px", height: "auto", filter: "invert(1)"  }}
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Site Logo"
                      style={{ width: "120px", height: "auto",  }}
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none ">
                
              </div>
              {/*====== main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="https://wa.me/918590812248">
                  <a className="main-btn secondary-btn">
                    Book Now
                    <i className="fab fa-whatsapp" />
                  </a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="https://wa.me/918590812248">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="fab fa-whatsapp" />
                  </a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header1;