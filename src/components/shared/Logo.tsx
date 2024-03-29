import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="wallyrobotimage.jpg"
          alt="wallynai"
          width={"45px"}
          height={"45px"}
          className="image-inverted"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 2px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>Wally</span>.AI
      </Typography>
    </div>
  );
};
export default Logo;
