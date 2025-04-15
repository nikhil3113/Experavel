
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Card = ({travellerName, travellerExperience, PlaceVisited, id}) => {

  return (
    <Link to={`/${id}`} className="block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full border border-transparent hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        <div className="h-28 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-700 dark:via-indigo-800 dark:to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
          <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full py-1 px-3 flex items-center space-x-1 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Destination</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <h2 className="text-white font-bold text-xl text-shadow">
              {PlaceVisited}
            </h2>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                {travellerName.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {travellerName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Traveler</p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 overflow-hidden mb-5">
            {travellerExperience}
          </p>
          
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 text-sm font-medium flex items-center group">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card