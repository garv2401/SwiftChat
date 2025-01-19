import React, { useEffect } from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { toast } from "react-hot-toast";

const VerifyEmail = () => {
  const { id, token } = useParams();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/user/${id}/verify/${token}`);
        toast.success(res.data.message);
        //console.log("Verification success");
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, token]);

  return (
    <div className="bg-dark min-h-screen text-white flex flex-col justify-center items-center">
      {loading && (
        <div className="mb-10 flex flex-row gap-10 items-center justify-center" role="status" aria-live="polite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="100"
            height="100"
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "#202329",
            }}
          >
            <g>
              <circle
                strokeDasharray="164.93361431346415 56.97787143782138"
                r="35"
                strokeWidth="10"
                stroke="#e15b64"
                fill="#202329"
                cy="50"
                cx="50"
              >
                <animateTransform
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                  dur="1s"
                  repeatCount="indefinite"
                  type="rotate"
                  attributeName="transform"
                />
              </circle>
            </g>
          </svg>
          <span className="my-4 text-lg">Loading...</span>
        </div>
      )}

      {!loading &&(
        <div className=" flex flex-col justify-center items-center">
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="150px" height="150px"><path fill="#202329" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"/><path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"/></svg>
          </div>
          
          <span className="my-4 text-xl font-medium">Verification Successfull</span>
        </div>
        
      )}

      {!loading && !isAuthenticated && (
        <div className="flex flex-row justify-center items-center gap-1 w-1/4">
          <p>Please</p>
          <Link to={'/login'} className="flex items-center justify-center text-indigo-400 hover:text-indigo-600 hover:underline text-lg ">
          Login
        </Link>
        </div>
        
      )}
    </div>
  );
};

export default VerifyEmail;
