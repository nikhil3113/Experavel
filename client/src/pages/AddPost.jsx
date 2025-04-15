import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Yellow_and_Green_Modern_Illustration_Tour_and_Travel_Agency_Logo-removebg-preview.png";
import { useDarkMode } from "../DarkModeContext";
import Header from "../components/Header";
import Loader from "../components/Loader";

const AddPost = () => {
  const [travellerName, setName] = useState("");
  const [placeVisited, setPlace] = useState("");
  const [travellerExperience, setExperience] = useState("");

  const { darkMode } = useDarkMode();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleTravel = (e) => {
    e.preventDefault();

    const wordCount = travellerExperience.trim().split(/\s+/).length;
    if (wordCount < 15) {
      alert("Minimum 15 words required for Experience");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}`, {
        travellerName,
        placeVisited,
        travellerExperience,
      })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="min-h-screen dark:bg-gradient-to-b dark:from-black dark:to-gray-900 bg-gradient-to-b from-blue-300 to-blue-200 pb-10">
          <Header logo={logo} />

          <div className="max-w-4xl mx-auto px-4">
            {/* Back navigation */}
            <div className="mt-6 mb-2">
              <button
                onClick={() => navigate("/home")}
                className="flex items-center text-blue-800 dark:text-blue-400 hover:underline transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to experiences
              </button>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-center font-bold text-blue-800 dark:text-blue-400 mb-2">
                Add Travel Experience
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
                Share your journey with fellow travelers around the world
              </p>

              {loading ? (
                <Loader />
              ) : (
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-8 bg-gradient-to-r from-blue-400 to-indigo-600 dark:from-blue-700 dark:to-indigo-900"></div>
                  <div className="p-8">
                    <form onSubmit={handleTravel} className="space-y-6">
                      <div>
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400 dark:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <input
                            id="name"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                            type="text"
                            value={travellerName}
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                          htmlFor="place"
                        >
                          Place Visited
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400 dark:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <input
                            id="place"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                            type="text"
                            value={placeVisited}
                            placeholder="Where did you go on your journey?"
                            onChange={(e) => setPlace(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                          htmlFor="experience"
                        >
                          Your Experience
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400 dark:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </div>
                          <textarea
                            id="experience"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all min-h-[160px] resize-y"
                            value={travellerExperience}
                            placeholder="Describe your journey and experiences (minimum 15 words)..."
                            onChange={(e) => setExperience(e.target.value)}
                            required
                          />
                          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                            <span>
                              Share details about sights, activities, and
                              memorable moments
                            </span>
                            <span>
                              {travellerExperience
                                .trim()
                                .split(/\s+/)
                                .filter(Boolean).length || 0}
                              /15 words minimum
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end pt-4">
                        <button
                          type="button"
                          className="mr-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                          onClick={() => navigate("/home")}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 shadow-sm hover:shadow-md transition-all"
                        >
                          <span>Share Experience</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7l4-4m0 0l4 4m-4-4v18"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
