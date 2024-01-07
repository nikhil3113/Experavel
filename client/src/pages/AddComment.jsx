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
    axios.post(`https://experavel-api.onrender.com/comment/${id}`, {
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
      <div className="min-h-screen bg-blue-300 dark:bg-black">
      <Header logo={logo} />
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-center dark:text-white  font-serif text-blue-800 font-extrabold">
          Add Travel Experience
        </h1>
        {loading? <Loader /> : 
        <div className="flex mt-8 xl:mt-12 border-2 dark:border-none bg-[#bde0fe] border-[#bde0fe] w-[90%] xl:w-[35%] justify-center items-center p-5 rounded-lg shadow-lg dark:text-white dark:bg-[#292929]">
          <form
            onSubmit={handleComment}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="mt-5 w-full">
              <label className="text-[#3D5A80] dark:text-white text-lg font-semibold">
                Name
                <input
                  className="border font-normal text-base dark:text-black border-[#bde0fe] rounded-lg w-full py-2 px-3"
                  type="text"
                  value={commenterName}
                  placeholder="Enter your full name"
                  onChange={(e) => setCommenterName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="my-5 w-full">
              <label className="text-[#3D5A80] dark:text-white text-lg font-semibold">
                Experience
                <textarea
                  className="border border-[#bde0fe] font-normal dark:text-black text-base h-40 rounded-lg w-full py-2 px-3"
                  type="text"
                  value={commenterText}
                  placeholder="Enter a Comment"
                  onChange={(e) => setCommenterText(e.target.value)}
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#98C1D9] dark:text-white dark:bg-slate-500 text-base  text-[#293241] font-semibold rounded-md py-2 px-4 mt-8 w-full hover:opacity-80"
              onClick={handleComment}
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

export default AddComment;
