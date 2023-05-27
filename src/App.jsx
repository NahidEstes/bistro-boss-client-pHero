import "./App.css";
import Banner from "./Pages/Home/Banner/Banner";
import Category from "./Pages/Home/Category/Category";
import Featured from "./Pages/Home/Featured/Featured";
import PopularMenu from "./Pages/Home/PopularMenu/PopularMenu";
import Testimonials from "./Pages/Home/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
}

export default App;
