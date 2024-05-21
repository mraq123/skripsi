import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Welcome = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/me");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h1 className="subtitle">Welcome Back, {data && data.user.username}</h1>
    </div>
  );
};

export default Welcome;
