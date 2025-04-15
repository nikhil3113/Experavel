import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/comment/${id}`)  
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response?.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">No comments yet. Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div>
      {comments.map((item) => (
        <div 
          key={item._id} 
          className="mb-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
        >
          <p className="font-bold text-blue-800 dark:text-blue-300 text-base uppercase tracking-wide mb-2">
            {item.commenterName}
          </p>
          <p className="text-lg">{item.commenterText}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;