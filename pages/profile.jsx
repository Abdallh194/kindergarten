import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Profile_Img from "../public/profile.jpg";
function Profile() {
  let { UserInfo } = useSelector((s) => s.ASRStore);
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="kindergarten" />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Profile">
        <div className="Details">
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div className="img-sec">
                <Image
                  src={Profile_Img}
                  alt={Profile_Img}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              {UserInfo.map((e) => {
                return (
                  <div key={e.id}>
                    <h1>{e.NewUser}</h1>
                  </div>
                );
              })}
              <div className="edit">Edit Profile</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Profile;
