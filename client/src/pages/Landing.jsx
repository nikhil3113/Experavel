import Header from "../components/Header";
import { useDarkMode } from "../DarkModeContext";
import logo from "../assets/Yellow_and_Green_Modern_Illustration_Tour_and_Travel_Agency_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

const Landing = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-black bg-gradient-to-b from-blue-300 to-blue-200">
        <Header logo={logo} />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-300 leading-tight">
                Travel Experience
                <span className="block text-blue-700 dark:text-blue-400">WebApp</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                Share your travel adventures, providing a space for storytelling and connecting with fellow explorers.
                <span className="ml-2">✈️🗺️</span>
              </p>
              <Link to="/home" className="mt-8 inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center group">
                  Explore Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-600 dark:from-blue-700 dark:to-indigo-900"></div>
                <div className="p-6">
                  <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4 -mt-16 relative shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-lg">E</div>
                      <p className="ml-3 font-semibold text-gray-800 dark:text-gray-200">Explorer</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">Visited the most beautiful landscapes in Norway. The fjords were breathtaking!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-12">
              <span className=" bg-blue-200 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center mr-2">📌</span>
              Key Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">User-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">Easily share your name, visited places, and unique travel experiences.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Interactive Comments</h3>
                <p className="text-gray-600 dark:text-gray-300">Engage with other users by leaving comments on their travel stories.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">No Authentication</h3>
                <p className="text-gray-600 dark:text-gray-300">Simplifying the process – no need for user authentication or authorization.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-12">
              <span className=" bg-blue-200 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center mr-2">❓</span>
              How It Works
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
              
              <div className="space-y-12">
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-600 dark:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                    <div className="ml-6 bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md w-full md:w-3/4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Share Your Experience</h3>
                      <p className="text-gray-600 dark:text-gray-300">Users enter their name, visited place, and a captivating travel experience.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-end">
                    <div className="mr-6 bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md w-full md:w-3/4 text-right">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Engage With Community</h3>
                      <p className="text-gray-600 dark:text-gray-300">Others can comment on the experiences, fostering a community of passionate travelers.</p>
                    </div>
                    <div className="flex-shrink-0 bg-blue-600 dark:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-600 dark:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">3</div>
                    <div className="ml-6 bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md w-full md:w-3/4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Connect With Explorers</h3>
                      <p className="text-gray-600 dark:text-gray-300">No hassle with authentication – just share your stories and connect with fellow explorers!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Section */}
        <div className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-12">
              <span className=" bg-blue-200 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center mr-2">🛠️</span>
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M12 4L20 8.00004V16L12 20L4 16V8.00004L12 4Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 4V12V20" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 8.00004L12 12" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 8.00004L12 12" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">React.js for a dynamic and responsive user interface.</p>
                </div>
              </div>
              
              <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M21 12L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Node.js and Express for server-side logic.</p>
                </div>
              </div>
              
              <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 10H20" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 6V18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Database</h3>
                  <p className="text-gray-600 dark:text-gray-300">MongoDB for storing travel experiences and comments.</p>
                </div>
              </div>
              
              <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M3.6 8.99999H20.4" stroke="currentColor" strokeWidth="2" />
                    <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" />
                    <path d="M11.5 3C9.26197 7.94113 9.26197 16.0589 11.5 21" stroke="currentColor" strokeWidth="2" />
                    <path d="M12.5 3C14.738 7.94113 14.738 16.0589 12.5 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Deployment</h3>
                  <p className="text-gray-600 dark:text-gray-300">Hosted on Render.com for reliable performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200">© Nikhil Chavan</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Designed with ❤️ for travelers worldwide</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="https://nikhilchavan.tk/" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all">
                    <RiContactsLine className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
                  </div>
                </a>
                <a href="https://github.com/nikhil3113" target="_blank" rel="noreferrer" className="group">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all">
                    <FaGithub className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </>
  );
};

export default Landing;
