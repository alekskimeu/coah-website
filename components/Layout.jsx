import Header from "./Header";
import Social from "./Social";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrap">
        <Header />
        <div className="pt-[5rem]">
          {children}
          <Social />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
