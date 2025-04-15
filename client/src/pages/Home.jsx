import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/Yellow_and_Green_Modern_Illustration_Tour_and_Travel_Agency_Logo-removebg-preview.png";
import Header from "../components/Header";
import { useDarkMode } from "../DarkModeContext";
import Loader from "../components/Loader";

const Home = () => {
  const [travel, setTravel] = useState([]);
  const[loading, setLoading] = useState(true);

  const {darkMode} = useDarkMode();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}`)
      .then((response) => {
        setTravel(response.data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response.data);
      }, []);
  });

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="min-h-screen dark:bg-gradient-to-b dark:from-black dark:to-gray-900 bg-gradient-to-b from-blue-300 to-blue-200 pb-10">
          <Header logo={logo} />
          
          {loading ? (
            <Loader />
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page Title */}
              <div className="py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-4 md:mb-0">
                  Travel Experiences
                  <span className="block text-sm font-normal text-blue-700 dark:text-blue-300 mt-1">
                    Discover amazing journeys from fellow travelers
                  </span>
                </h1>
  
                {/* Add Experience Button */}
                <Link to="/add">
                  <button className="flex items-center group bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-md">
                    <span className="mr-2 font-medium">Add Experience</span>
                    <MdOutlineAddBox className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
              
              {/* Cards Grid */}
              {travel.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-2">No travel experiences yet</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Be the first to share your journey!</p>
                  <Link to="/add">
                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all">
                      <span className="mr-2">Get Started</span>
                      <MdOutlineAddBox className="text-xl" />
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {travel.map((item) => (
                    <div key={item._id} className="transform hover:-translate-y-1 transition-all duration-300">
                      <Card
                        travellerName={item.travellerName}
                        travellerExperience={item.travellerExperience}
                        PlaceVisited={item.placeVisited}
                        id={item._id}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
