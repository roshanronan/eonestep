import React from "react";
import Carousel from "../components/Carousel";
import ServicesSection from "../components/Services";
import AchievementSection from "../components/Achivements";
import About from "../components/About";
import AffiliationProcess from "../components/AffiliationProcess";
import RefundAndCanel from "../components/RefundAndCanel";
import HeroBanner from "../components/HeroBanner";
import Hero2 from "../HeroBanner2";
import StickyButton from "../components/StickyButton";

const Landing = () => {
  return (
    <div className="position-relative" style={{ overflowX: "hidden" }}>
      {/* <Carousel/> */}
      {/* <Hero2/> */}

      <StickyButton
        content={"8766391724 / 8860365077"}
        bgColor={"#25D366"}
        imageSrc="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        whastappNo={918766391724}
        type={"whatsapp"}
        defaultMessage={"Hello, I want to know more!"}
      />
      <StickyButton
        content={"eonestep.education@gmail.com"}
        bgColor={"#ffffff"}
        imageSrc="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
        top="58%"
        textColor="black"
        hoverWidth={300}
        type={"email"}
        emailAddress={"eonestep.education@gmail.com"}
        emailSubject={"Inquiry"}
        emailBody={
          "Hello, I would like to know more about your services."
        }
      />
      <HeroBanner />
      <ServicesSection />
      <AchievementSection />
      <section id="about">
        <About />
      </section>
      <section id="affiliation">
        {" "}
        <AffiliationProcess />
      </section>
      <section id="refundncancel">
        {" "}
        <RefundAndCanel />
      </section>
    </div>
  );
};

export default Landing;
