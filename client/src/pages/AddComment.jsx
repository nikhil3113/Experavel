import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/Yellow_and_Green_Modern_Illustration_Tour_and_Travel_Agency_Logo-removebg-preview.png";
import Header from "../components/Header";
import { useDarkMode } from "../DarkModeContext";
import Loader from "../components/Loader";

const AddComment = () => {
  const [commenterName, setCommenterName] = useState("");
  const [commenterText, setCommenterText] = useState("");

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();

  const {darkMode} = useDarkMode();

  useEffect(()=>{
    setLoading(false);
  }, [])

  const handleComment = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/comment/${id}`, {
        commenterName,
        commenterText
      })
      .then(() => {
        navigate(`/${id}`);
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
                onClick={() => navigate(`/${id}`)}
                className="flex items-center text-blue-800 dark:text-blue-400 hover:underline transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to experience
              </button>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-center font-bold text-blue-800 dark:text-blue-400 mb-2">
                Add Your Comment
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
                Share your thoughts about this travel experience
              </p>
              
              {loading ? <Loader /> : (
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-8 bg-gradient-to-r from-blue-400 to-indigo-600 dark:from-blue-700 dark:to-indigo-900"></div>
                  <div className="p-8">
                    <form
                      onSubmit={handleComment}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            id="name"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                            type="text"
                            value={commenterName}
                            placeholder="Enter your full name"
                            onChange={(e) => setCommenterName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="comment">
                          Your Comment
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                          <textarea
                            id="comment"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all min-h-[160px] resize-y"
                            value={commenterText}
                            placeholder="Share your thoughts on this travel experience..."
                            onChange={(e) => setCommenterText(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          className="mr-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                          onClick={() => navigate(`/travel/${id}`)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 shadow-sm hover:shadow-md transition-all"
                        >
                          <span>Submit Comment</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

export default AddComment;
