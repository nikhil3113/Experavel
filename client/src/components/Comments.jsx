import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://experavel-api.onrender.com/comment/${id}`)  
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [id]);

  return (
    <div>
      {comments.map((item) => (
        <div key={item._id} className="mb-4">
          <p className="ml-4 text-xl">By: <span className="font-bold">{item.commenterName}</span></p>
          <p className="ml-4 text-xl">{item.commenterText}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
