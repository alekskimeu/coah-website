import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Social = () => {
  return (
    <section className="py-[5rem] lg:py-[7rem] flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <p className="text-gray-600">Find us online</p>
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/coloursofartsandheartfootballacademy/"
            target="_blank"
          >
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <FacebookIcon style={{ fontSize: "2rem", opacity: ".7" }} />
            </IconButton>
          </a>
          <a href="" target="_blank">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <InstagramIcon style={{ fontSize: "2rem", opacity: ".7" }} />
            </IconButton>
          </a>
          {/* <a href="">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <TwitterIcon style={{ fontSize: "2rem", opacity: ".7" }} />
            </IconButton>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Social;
