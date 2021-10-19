import React, { FunctionComponent } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

interface AboutPageProps {}

const AboutPage: FunctionComponent<AboutPageProps> = () => (
  <div>
    <Header />
    <div className="content">
      <span className="content__title">About Page</span>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
