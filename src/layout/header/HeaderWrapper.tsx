import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_univ.png";

function HeaderWrapper() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      document
        .getElementById("mobile-menu-sidebar")
        ?.classList.remove("drawer-on");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    document.getElementById("mobile-menu-sidebar")?.classList.add("drawer-on");
  };

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("uk");
      localStorage.setItem("language", "uk");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  };

  return (
    <>
      <div
        ref={ref}
        id="mobile-menu-sidebar"
        className="header-menu align-items-stretch drawer drawer-start"
      >
        <div
          className="menu menu-lg-rounded menu-column menu-lg-row menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-semibold my-5 my-lg-0 align-items-stretch"
          id="#kt_header_menu"
        >
          <div className="menu-item me-lg-1">
            <Link className="menu-link py-3" to="/">
              <span className="menu-title">{t("Home menu")}</span>
            </Link>
          </div>
          <div className="menu-item me-lg-1">
            <Link className="menu-link py-3" to="/universities">
              <span className="menu-title">{t("Universities menu")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div id="kt_header" className="header align-items-stretch">
        <div className="container d-flex align-items-center">
          <div
            onClick={handleMobileMenuToggle}
            className="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
            title="Show aside menu"
          >
            <div
              className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
              id="kt_header_menu_mobile_toggle"
            >
              <span className="svg-icon svg-icon-2x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mh-50px"
                >
                  <path
                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <Link to="/">
              <img alt="Logo" src={logo} className="logo-default h-50px" />
            </Link>
          </div>
          <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1 d-none d-lg-block d-xl-block">
            <div className="d-flex align-items-stretch" id="kt_header_nav">
              <div className="header-menu align-items-stretch">
                <div
                  className="menu menu-lg-rounded menu-column menu-lg-row menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-semibold my-5 my-lg-0 align-items-stretch"
                  id="#kt_header_menu"
                >
                  <div className="menu-item me-lg-1">
                    <Link className="menu-link py-3" to="/">
                      <span className="menu-title">{t("Home menu")}</span>
                    </Link>
                  </div>
                  <div className="menu-item me-lg-1">
                    <Link className="menu-link py-3" to="/universities">
                      <span className="menu-title">
                        {t("Universities menu")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="app-navbar flex-shrink-0"
            onClick={() => changeLanguage()}
          >
            {i18n.language === "uk" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="24"
                height="12"
              >
                <clipPath id="s">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="t">
                  <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                </clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    clipPath="url(#t)"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#fff"
                    strokeWidth="10"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </g>
              </svg>
            )}

            {i18n.language === "en" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14">
                <rect width="24" height="7" fill="#005BBB" />
                <rect width="24" height="7" y="7" fill="#FFD500" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderWrapper;
