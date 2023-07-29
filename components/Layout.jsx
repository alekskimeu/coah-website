import Header from "./Header";
import Social from "./Social";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-[5rem]">{children}</div>
      <Social />
      <Footer />
    </div>
  );
};

export default Layout;
