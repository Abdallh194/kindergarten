import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import boy_img_01 from "../public/most_01.jpg";
import boy_img_02 from "../public/most_02.jpg";
import boy_img_03 from "../public/most_03.jpg";
import boy_img_04 from "../public/most_04.jpg";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <div className="About handel-margin-padding ">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} className="fr-Box top-box">
            <div className="head one">About Our</div>
            <div className="head two">kinderGarten </div>
            <div className="desc">
              Donot always forget Never Stop Learning , Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit, corporis iste tempora
              autem harum quaerat laudantium optio atque at aperiam repudiandae.
              Numquam
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="cnt-box top-box">
            <Image src={boy_img_01} className="img-fluid" alt={boy_img_01} />
            <div className="content">
              <div className="header">Education is the key to success</div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="ab-box top-box">
            <Image src={boy_img_02} className="img-fluid" alt={boy_img_02} />
            <Image
              src={boy_img_03}
              className="img-fluid cus-img"
              alt={boy_img_03}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="btm-box">
            <Image src={boy_img_04} className="img-fluid" alt={boy_img_02} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} className="ls-Box btm-box">
            <div className="header">Lorem, ipsum dolor sit amet</div>
            <div className="desc-lsbox">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              maxime totam, tempore, ullam nihil maiores enim animi optio iure
              nisi quia, incidunt perferendis tenetur delectus! Saepe
              accusantium dolores corrupti reprehenderit.tenetur delectus! Saepe
              accusantium dolores corrupti reprehenderit.
            </div>
            <Link href="/register" className="more">
              Register Now
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
