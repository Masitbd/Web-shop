import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
//import Main from "./common/Main";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;
