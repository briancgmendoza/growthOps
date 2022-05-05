import * as React from "react";
import Banner from "./Banner";
import MainPage from "../pages/MainPage";

const Layout = () => {
  return (
    <main
      className="d-flex 
        flex-column
        align-items-center
        justify-content-center
        m-3"
    >
      <Banner />
      <MainPage />
    </main>
  );
};

export default Layout;
