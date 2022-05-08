import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://github.com/paras-1818/SIMMI-Foundation-Task" target="__blank">
          Paras Meena
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.facebook.com/profile.php?id=100027701914776" target="__blank">
          <FacebookIcon/>
        </a>
        <a href="#" target="__blank">
       <InstagramIcon />

       </a>
       <a href="https://www.linkedin.com/in/paras-meena-b52440199/" target="__blank">
       <LinkedInIcon />
       
       </a>
      </div>
    </div>
  );
};

export default Footer;