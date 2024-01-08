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
        <div className="min-h-screen bg-blue-300 dark:bg-[#292929] dark:text-white text-[#292929] ">
          <Header logo={logo} />

          <div className="flex flex-col  justify-center items-center  my-10 xl:mt-0 md:mt-0 px-5 xl:p-0 md:p-0">
            <p className="text-5xl text-center font-bold ">
              Travel Experience WebApp{" "}
            </p>
            <p className="text-center font-semibold mt-5">
              share your travel adventures, providing a space for storytelling
              ✈️🗺️
            </p>
            <Link to={"/home"}>
              <button className="mt-5 dark:bg-blue-300 bg-[#292929] text-white">
                Explore
              </button>
            </Link>
          </div>

          <div className="flex flex-col mt-20  justify-center items-center">
            <p className="text-3xl mb-5 font-bold">📌 Key Features</p>
            <ul className="px-5 xl:w-2/5 text-[20px]">
              <li className="mb-2">
                <span className="font-bold text-xl">User-Friendly: </span>{" "}
                Easily share your name, visited places, and unique travel
                experiences.
              </li>
              <li className="my-3">
                <span className="font-bold text-xl">Interactive Comments:</span>{" "}
                Engage with other users by leaving comments on their travel
                stories.
              </li>
              <li className="my-3">
                <span className="font-bold text-xl">No Authentication:</span>{" "}
                Simplifying the process – no need for user authentication or
                authorization.
              </li>
            </ul>
          </div>

          <div className="flex flex-col mt-20 justify-center items-center">
            <p className="text-3xl mb-5 font-bold">❓How it works</p>
            <ol className="px-5 xl:w-2/5 list-disc  text-[20px]">
              <li className="mb-3">
                Users enter their name, visited place, and a captivating travel
                experience.
              </li>
              <li className="my-3">
                Others can comment on the experiences, fostering a community of
                passionate travelers.
              </li>
              <li className="my-3">
                No hassle with authentication – just share your stories and
                connect with fellow explorers!
              </li>
            </ol>
          </div>

          <div className="flex flex-col mt-20  justify-center items-center">
            <p className="text-3xl mb-5 font-bold">🛠️ Tech Stack</p>
            <ul className="px-5 xl:w-2/5 text-[20px]">
              <li className="mb-2">
                <span className="font-bold text-xl">Frontend: </span> React.js
                for a dynamic and responsive user interface.
              </li>
              <li className="my-3">
                <span className="font-bold text-xl">Backend: </span> Node.js and
                Express for server-side logic.
              </li>
              <li className="my-3">
                <span className="font-bold text-xl">Databse: </span> MongoDB for
                storing travel experiences and comments.
              </li>
              <li className="my-3">
                <span className="font-bold text-xl">Deployment: </span> Hosted
                on Render.com .
              </li>
            </ul>

            <footer className="mt-10 text-xl mb-5 flex flex-col">
              <div>&#169;Nikhil chavan</div>

              <div className="flex justify-evenly items-center mt-5 ">
                <a
                  href="https://nikhilchavan.tk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiContactsLine className="text-3xl text-white cursor-pointer" />
                </a>
                <a
                  href="https://github.com/nikhil3113"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-3xl text-white cursor-pointer" />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
