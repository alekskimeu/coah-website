import React from "react";
import {IconButton} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Social = () => {
  return (
    <section className="h-[10rem] py-2 flex justify-center items-center border-t">
      <div className="container mx-auto flex justify-center items-center gap-5">
        <p>Find us online</p>
        <div className="flex justify-center items-center gap-4">
          <a href="">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <FacebookIcon style={{fontSize: "2rem", opacity: ".7"}} />
            </IconButton>
          </a>
          <a href="">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <InstagramIcon style={{fontSize: "2rem", opacity: ".7"}} />
            </IconButton>
          </a>
          <a href="">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <TwitterIcon style={{fontSize: "2rem", opacity: ".7"}} />
            </IconButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
