import Layout from "./Layout";
import { AudioComponents } from "../components/AudioComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Audio = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const GetMe = async () => {
    try {
      const response = await axios.get("http://localhost:5000/me");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("An error occurred during login");
      }
    }
  };

  useEffect(() => {
    GetMe();
  }, []);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  });
  return (
    <Layout>
      <AudioComponents />
    </Layout>
  );
};
