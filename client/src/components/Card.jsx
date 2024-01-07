import { PiBookOpenTextLight } from "react-icons/pi";
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Card = ({travellerName, travellerExperience, PlaceVisited, id}) => {
    
   const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return text;
  }

  return (
    <>
    <div className="flex flex-col justify-center bg-white  dark:bg-[#292929] dark:text-white backdrop-blur-lg bg-opacity-60  text-black w-auto m-5 p-2 py-2 text-xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
      <div className="flex">
        <p className="mr-2 font-bold">Name:</p>
        <p>{travellerName}</p>
      </div>
      <div className="flex mt-2">
        <p className="mr-2 font-bold">Visited:</p>
        <p>{PlaceVisited}</p>
      </div>
      <div className=" mt-2">
        <p className="mr-2 font-bold">Experience:</p>
        <p>{truncateText(travellerExperience, 20)}</p>
      </div>
      <div className="mt-4 p-4 flex justify-end items-end">
        <Link to={`/${id}`}>
            <PiBookOpenTextLight className="text-3xl text-green-800 dark:text-green-500" />
        </Link>
      </div>
    </div>
  </>
  )
}

export default Card