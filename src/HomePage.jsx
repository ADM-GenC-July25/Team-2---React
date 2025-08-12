import Menu from "./components/Menu";
import Inquiry from "./components/Inquiry";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import HomeLogin from "./components/HomeLogin";

function HomePage({ menuData }) {
  return (
    <div className=" text-green-200 font-mono">
      <Banner />
      {/* <h1 className="text-center text-5xl p-8 font-extrabold tracking-widest text-green-300 drop-shadow-[0_0_10px_rgba(124,252,0,0.7)] animate-pulse">Welcome to Alien Café!</h1>
      <p className="text-center text-lg pb-8 max-w-2xl mx-auto bg-black/30 rounded-xl shadow-lg border-2 border-green-400 px-6 py-4 mb-8">
        This is the famous Alien Café located in the Milky Way galaxy, Copernican System, Asteroid belt just past Mars.<br />
        Serving the best food in the universe for over 1000 Earth years.<br />
        Everything is made from surrounding planets, stars, and star dust.<br />
        Become one with the universe and taste the cosmos!
      </p> */}
      {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        <img src="https://via.placeholder.com/600x300" alt="Restaurant Banner" className="mx-auto mb-5 rounded-2xl border-4 border-purple-400 shadow-xl hover:scale-105 transition-transform duration-300" />
        <img src="https://via.placeholder.com/600x300" alt="Resturant location" className="mx-auto mb-5 rounded-2xl border-4 border-green-400 shadow-xl hover:scale-105 transition-transform duration-300" />
      </div> */}
      <FeaturedProducts />
      <HomeLogin/>
      <div className="space-y-10">
        {menuData.map((menu, index) => (
          <Menu key={index} category={menu.category} items={menu.items} />
        ))}
      </div>
      <Inquiry />
    </div>
  );
}
export default HomePage;
