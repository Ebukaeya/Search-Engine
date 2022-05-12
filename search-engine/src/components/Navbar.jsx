import "../styles/narBarCss.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Narbar = () => {
  const location = useLocation();
  /* setting the css for the selected navbar */
  let css;
  let serviceCss;
  
  location.pathname === "/favourites" 
    ? (css = "")
    : (css = "navigationTstatic")/*  */;
  location.pathname === "/favourites"
    ? (serviceCss = "navigationTstatic")
    : (serviceCss = "");

  const [display, setDisplay] = useState(false);

  const displayDropDown = () => {
    setDisplay(true);
  };
  const hideDropDown = () => {
    setDisplay(false);
  };
  return (
    <>
      <div className="Narbar">
        <div className="mycontainerNav">
          <div className="NarbarContent">
            <div>
              <div>
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-award"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"/company"}
                >
                  {" "}
                  <span
                    className={"navigationT " + css}
                    onMouseOver={displayDropDown}
                  >
                    {" "}
                    Companys
                  </span>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"/favourites"}
                >
                  <span className={"navigationT " + serviceCss}>
                    {" "}
                    Favourites
                  </span>
                </Link>

                {/*   <span> Logistics</span>
                  <span> Service Providers</span> */}
              </div>
            </div>

            <div>
              <button>Log in</button>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      {/* { display && <DropDownBusiness onMouseOver={hideDropDown} />} */}
    </>
  );
};

export default Narbar;
