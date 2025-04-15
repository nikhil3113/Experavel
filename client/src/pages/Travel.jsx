import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Comments from "../components/Comments";
import { MdOutlineAddBox } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import logo from "../assets/Yellow_and_Green_Modern_Illustration_Tour_and_Travel_Agency_Logo-removebg-preview.png";
import Header from "../components/Header";
import { useDarkMode } from "../DarkModeContext";
import Loader from "../components/Loader";

const Travel = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [experience, setExperience] = useState("");
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { darkMode } = useDarkMode();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((response) => {
        setName(response.data.travellerName);
        setPlace(response.data.placeVisited);
        setExperience(response.data.travellerExperience);
        setLikes(response.data.likes);

        setLoading(false);

        const storedHasLiked = localStorage.getItem(`liked_${id}`);
        setHasLiked(!!storedHasLiked); // Convert to boolean
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [id]);

  const handleLikes = async () => {
    try {
      if (hasLiked) {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/unlike/${id}`,
          {
            likes,
          }
        );

        setLikes(response.data.likes);
        setHasLiked(false);

        localStorage.removeItem(`liked_${id}`);

        console.log("Unliked successfully!");
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/like/${id}`,
          {
            likes,
          }
        );

        setLikes(response.data.likes);
        setHasLiked(true);

        localStorage.setItem(`liked_${id}`, "true");

        console.log("Liked successfully!");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

 return (
  <>
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen dark:bg-gradient-to-b dark:from-black dark:to-gray-900 bg-gradient-to-b from-blue-300 to-blue-200 pb-10">
        <Header logo={logo} />
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col justify-center items-center px-4 max-w-7xl mx-auto">
            {/* Back button */}
            <div className="self-start mb-4">
              <Link to="/home" className="flex items-center text-blue-800 dark:text-blue-400 hover:underline transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to experiences
              </Link>
            </div>
            
            {/* Main content card */}
            <div className="bg-white backdrop-blur-lg bg-opacity-80 text-black dark:text-white text-xl p-8 m-5 rounded-2xl shadow-2xl md:w-3/5 w-full dark:bg-gray-800 dark:bg-opacity-80 border border-transparent dark:border-gray-700 transition-all">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl mb-6 text-blue-800 dark:text-blue-400 font-extrabold">
                  Travel Experience
                </h1>
                <div className="flex items-center bg-blue-100 dark:bg-gray-700 rounded-full px-3 py-1 mt-1">
                  <FaHeart
                    className={`mx-1 cursor-pointer transition-all duration-300 ${
                      hasLiked
                        ? "text-red-500 dark:text-red-500 scale-110"
                        : "text-gray-400 dark:text-gray-400 hover:scale-110"
                    }`}
                    onClick={handleLikes}
                  />
                  <span className="font-bold ml-1">{likes}</span>
                </div>
              </div>
              
              <div className="mb-5 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-bold text-blue-800 dark:text-blue-300 text-base uppercase tracking-wide mb-1">Traveler</p>
                <p className="text-2xl">{name}</p>
              </div>
              
              <div className="mb-5 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-bold text-blue-800 dark:text-blue-300 text-base uppercase tracking-wide mb-1">Destination</p>
                <p className="text-2xl">{place}</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-bold text-blue-800 dark:text-blue-300 text-base uppercase tracking-wide mb-1">Experience</p>
                <p className="text-lg leading-relaxed">{experience}</p>
              </div>
            </div>
            
            {/* Comments section */}
            <div className="bg-white backdrop-blur-lg bg-opacity-80 text-black dark:text-white dark:bg-gray-800 dark:bg-opacity-80 text-xl p-8 m-5 rounded-2xl shadow-2xl xl:w-2/5 md:w-3/5 w-full border border-transparent dark:border-gray-700 transition-all">
              <div className="flex flex-col xl:flex-row md:flex-row justify-between items-center mb-6 border-b dark:border-gray-700 pb-4">
                <h2 className="text-2xl text-blue-800 font-bold dark:text-blue-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Comments
                </h2>
                
                <Link to={`/comment/${id}`} className="group">
                  <div className="flex items-center bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-800 dark:text-green-400 px-4 py-2 rounded-full transition-all">
                    <p className="mr-1">Add Comment</p>
                    <MdOutlineAddBox className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                <Comments />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
);
};

export default Travel;
