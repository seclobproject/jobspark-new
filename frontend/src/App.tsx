import "./App.css";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />
      {/* Banner - big screen */}
      <div className="relative hidden md:block">
        <img
          src="src/assets/banner-main.jpg"
          alt="main-banner"
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h4 className="banner-heading mb-4">Explore your jobs!</h4>

            {/* Search bar */}
            <div className="flex items-center banner-input-div max-w-md mx-auto bg-white shadow-md">
              <img className="w-6 mx-3" src="src/assets/search.png" alt="" />
              <input
                type="text"
                placeholder="Search"
                className="p-1 rounded-md"
              />
              <button className="search-btn">Explore</button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner - big screen */}

      {/* Search - mobile */}
      <div className="mobile-search md:hidden">
        <div className="flex items-center banner-input-div max-w-md mx-auto bg-white shadow-md">
          <img className="w-6 mx-3" src="src/assets/search.png" alt="" />
          <input type="text" placeholder="Search" className="p-1 rounded-md" />
        </div>
      </div>
      {/* Search - mobile */}
    </>
  );
}

export default App;
