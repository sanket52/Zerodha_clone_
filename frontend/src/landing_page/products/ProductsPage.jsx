import React from "react";
import Hero from "./Hero";
import LeftSecton from "./LeftSecton";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSecton
        imageUrl="media/images/kite.png"
        productsName="kite"
        productsDescription="Our ultra-fast flagship trading platform with 
        streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/images/console.png"
        productsName="Console"
        productsDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.

 "
        tryDemo="Learn more"
      />
      <LeftSecton
        imageUrl="media/images/coin.png"
        productsName="Coin"
        productsDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
    <RightSection
        imageUrl="media/images/kiteconnect.png"
        productsName="Kite Connect API"
        productsDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.

 .

 "
        tryDemo="Kite Connect"
      />
      <LeftSecton
        imageUrl="media/images/varsity.png"
        productsName="Varsity mobile"
        productsDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
     <h4 className="text-center text-muted">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech </a> blog.</h4>
      <Universe />
    </>
  );
};

export default ProductsPage;
