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

  const {darkMode} = useDarkMode();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/`)
      .then((response) => {
        setTravel(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      }, []);
  });

  return (
    // bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500
    <>
      <div className={` ${darkMode && "dark"}`}>
        <div className=" min-h-screen dark:bg-black bg-blue-300">
          <Header logo={logo}  />

          <Link to={"/add"} className="text-green-800 dark:text-green-500">
            <div className="flex justify-end items-center mr-5">
              <span className="text-2xl">Add</span>
              <MdOutlineAddBox className="text-3xl " />
            </div>
          </Link>
          <div className="grid xl:grid-cols-4 md:grid-cols-3">
            {travel.map((item) => (
              <div key={item._id}>
                <Card
                  travellerName={item.travellerName}
                  travellerExperience={item.travellerExperience}
                  PlaceVisited={item.placeVisited}
                  id={item._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
