import "./Topbar.scss";
import {
  Person,
  Mail,
  Facebook,
  Twitter,
  WhatsApp,
  LinkedIn,
} from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"Topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">
            Ujjwal.
          </a>
          <div className="itemContainer">
            <Person className="icons active" />
            <span> +91 7677765550</span>
            <Mail className="icons" />
            <span>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto: ujjwal.1327@gmail.com"
              >
                ujjwal.1327@gmail.com
              </a>
            </span>
            <div className="socialIcons">
              <a
                href="https://www.facebook.com/uzwal.raj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  style={{ color: "blue", cursor: "pointer", fontSize: "20px" }}
                />
              </a>
              <a
                href="https://twitter.com/13duUjjwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  style={{
                    color: "#1D9BF0",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                />
              </a>
              <a
                href="https://wa.me/7677765550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp
                  style={{
                    color: "#40C351",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ujjwal-raj-1464181b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn
                  style={{
                    color: "#0A66C2",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
