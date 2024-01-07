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
  const[loading, setLoading] = useState(true)

  const { id } = useParams();

  const {darkMode} = useDarkMode();

  useEffect(() => {
    axios
      .get(`https://experavel-api.onrender.com/${id}`)
      .then((response) => {
        setName(response.data.travellerName);
        setPlace(response.data.placeVisited);
        setExperience(response.data.travellerExperience);
        setLikes(response.data.likes);

        setLoading(false);

        const storedHasLiked = localStorage.getItem(`liked_${id}`);
        setHasLiked(!!storedHasLiked); // Convert to boolean

        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [id]);

  const handleLikes = async () => {
    try {
      if (hasLiked) {
        const response = await axios.post(
          `https://experavel-api.onrender.com/unlike/${id}`,
          {
            likes,
          }
        );

        setLikes(response.data.likes);
        setHasLiked(false);

        localStorage.removeItem(`liked_${id}`);

        console.log("Unliked successfully!");
      } else {
        const response = await axios.post(`https://experavel-api.onrender.com/like/${id}`, {
          likes,
        });

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
    <div className={` ${darkMode && "dark"}`}>
    <div className=" items-center min-h-screen dark:bg-black bg-blue-300 ">
      <Header logo={logo}  />
      {loading? <Loader /> : 
      
      <div className="flex flex-col justify-center items-center">
        <div className=" bg-white backdrop-blur-lg bg-opacity-60 text-black dark:text-white text-xl p-8 m-5 rounded-lg shadow-xl xl:w-2/5 md:2/5 dark:bg-[#292929]">
          <h1 className="text-3xl mb-4 text-blue-800 font-extrabold">
            Travel Experience
          </h1>
          <div className="mb-4">
            <p className="font-bold">Name:</p>
            <p>{name}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Visited:</p>
            <p>{place}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Experience:</p>
            <p>{experience}</p>
          </div>
          <div className="flex">
            <FaHeart
              className={`mt-1 mr-1 cursor-pointer ${
                hasLiked
                  ? "transition ease-in-out delay-150  scale-110 text-red-500 dark:text-red-500 duration-300"
                  : "transition ease-out delay-150 text-white dark:text-white"
              }`}
              onClick={handleLikes}
            />
            <span>{likes}</span>
          </div>
        </div>
        <div className="bg-white backdrop-blur-lg bg-opacity-60 text-black dark:text-white dark:bg-[#292929] text-xl p-8 m-5 rounded-lg shadow-xl xl:w-2/5 md:w-2/5">
          <div className="flex flex-col xl:flex-row md:flex-row justify-between">
            <h2 className="text-2xl mb-4 text-blue-800 font-bold dark:text-white">Comments</h2>
            <Link to={`/comment/${id}`}>
              <div className="flex text-green-800 dark:text-green-500">
                <p>Add </p>
                <MdOutlineAddBox className="text-2xl my-[3px]" />
              </div>
            </Link>
          </div>
          <Comments />
        </div>
      </div>
      }
    </div>
    </div>
    </>
  );
};

export default Travel;
