import Inquiry from "./components/Inquiry";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import HomeLogin from "./components/HomeLogin";

function HomePage({ menuData }) {
  return (
    <div className=" text-green-200 font-mono">
      <Banner />
      <FeaturedProducts />
      {/* <HomeLogin/> */}
      <Inquiry />
    </div>
  );
}
export default HomePage;
