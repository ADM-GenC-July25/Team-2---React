import Inquiry from "./components/Home/Inquiry";
import Banner from "./components/Home/Banner";
import FeaturedProducts from "./components/Home/FeaturedProducts";

function HomePage() {
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
