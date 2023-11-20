import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./style.css";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import Footer from "./Footer";
window.onresize = () => {
  document.title = window.outerWidth;
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <Footer />
  </>
);
