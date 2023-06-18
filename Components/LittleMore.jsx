import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
function LittleMore() {
  return (
    <div className="LittleMore">
      <Container>
        <div className="fr-head">Little More About Us</div>
        <div className="head">Your Kids is Our Future</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          quisquam deleniti sit iusto magnam veritatis nihil id aut cupiditate
          ratione. At fuga error commodi delenitiLorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsam quisquam deleniti sit iusto magnam
          veritatis nihil id aut cupiditate ratione. At fuga error commodi
          deleniti
        </div>
        <Link href="/register" className="more">
          Register Now
        </Link>
      </Container>
    </div>
  );
}

export default LittleMore;
