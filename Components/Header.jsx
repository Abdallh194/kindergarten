import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import home_img from "../public/home-pg.jpg";
function Header() {
  return (
    <div className="Header">
      <Container>
        <div className="head">kinderGarten</div>
        <div className="desc">Never Stop Learning</div>
      </Container>
      <Image src={home_img} className="img-fluid" alt={home_img} />
    </div>
  );
}

export default Header;
