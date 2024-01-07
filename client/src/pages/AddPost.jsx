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

  const {darkMode} = useDarkMode();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  },[])

  const handleTravel = (e) => {
    e.preventDefault();

    const wordCount = travellerExperience.trim().split(/\s+/).length;
    if (wordCount < 15) {
      alert("Minimum 15 words required for Experience");
      return;
    }

    axios.post("https://experavel-api.onrender.com/", {
      travellerName,
      placeVisited,
      travellerExperience,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
    <div className={`${darkMode && "dark"}`}>
     <div className="min-h-screen bg-blue-300 dark:bg-black">
    <Header logo={logo}/>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center dark:text-white font-serif text-blue-800 font-extrabold">
          Add Travel Experience
        </h1>
        {loading? <Loader /> : 
        <div className="flex mt-8 xl:mt-12 border-2 bg-[#bde0fe] border-[#bde0fe] w-[90%] xl:w-[35%] justify-center items-center p-5 rounded-lg shadow-lg dark:bg-[#292929] dark:border-none mb-10">
          <form
            onSubmit={handleTravel}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="mt-5 w-full">
              <label className="text-[#3D5A80] dark:text-white text-lg font-semibold">
                Name
                <input
                  className="border font-normal text-base dark:text-black  border-[#bde0fe] rounded-lg w-full py-2 px-3"
                  type="text"
                  value={travellerName}
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="mt-5 w-full">
              <label className="text-[#3D5A80] dark:text-white text-lg font-semibold">
                Place Visited
                <input
                  className="border font-normal text-base dark:text-black border-[#bde0fe] rounded-lg w-full py-2 px-3 "
                  type="text"
                  value={placeVisited}
                  placeholder="Enter Place Visited"
                  onChange={(e) => setPlace(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="my-5 w-full">
              <label className="text-[#3D5A80]  text-lg font-semibold">
                Experience
                <textarea
                  className="border border-[#bde0fe] font-normal dark:text-black text-base h-40 rounded-lg w-full py-2 px-3"
                  type="text"
                  value={travellerExperience}
                  placeholder="Enter Your Experience (minimum 20 words)"
                  onChange={(e) => setExperience(e.target.value)}
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#98C1D9] text-base  dark:text-white dark:bg-slate-500 text-[#293241] font-semibold rounded-md py-2 px-4 mt-8 w-full hover:opacity-80"
              onClick={handleTravel}
            >
              Add Experience
            </button>
          </form>
        </div>
        }
      </div>
    </div>
    </div>
</>

  );
};

export default AddPost;
