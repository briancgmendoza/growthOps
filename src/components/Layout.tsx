import Banner from "./Banner";
import MainPage from "../pages/MainPage";

const Layout = () => {
  return (
    <div
      className="d-flex 
        flex-column
        align-items-center
        justify-content-center
        m-3"
    >
      <Banner />
      <MainPage />
    </div>
  );
};

export default Layout;
