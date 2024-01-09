
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const Header = ({logo}) => {

    const { darkMode, toggleDarkMode } = useDarkMode();
    
  return (
    <>
        <div className="xl:flex md:flex justify-around items-center ">
            <Link to={'/'}>
            <div className="flex relative xl:right-24">
              <img
                src={logo}
                alt="logo"
                className="xl:w-[20%] w-[30%] md:w-[20%] text-left"
              />
              <h1 className=" dark:text-white text-5xl text-blue-800 text-center relative top-10 mb-20 font-extrabold ">
                Experavel
              </h1>
            </div>
            </Link>
          <div className="relative xl:left-28 flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="darkModeSwitch"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="hidden cursor-pointer"
      />
      <label
        htmlFor="darkModeSwitch"
        className={`bg-${darkMode ? "dark" : "dark:bg-white"} w-14 h-8 rounded-full p-1 flex items-center transition duration-300  border border-${darkMode ? "dark" : "dark:border-white"} cursor-pointer`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full cursor-pointer shadow-md transform ${
            darkMode ? "translate-x-6" : ""
          } transition-transform`}
        ></div>
      </label>
      {darkMode ? <CiLight className="text-3xl ml-2" /> : <MdDarkMode className="text-3xl ml-2" />}
    </div>
          </div>
    </>
  )
}

export default Header