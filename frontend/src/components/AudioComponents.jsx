import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AudioComponents = () => {
  const [getAudio, setAudio] = useState([]);

  const getAllDataudio = async () => {
    try {
      const response = await axios.get("http://localhost:5000/audio"); // Ganti URL sesuai dengan endpoint backend Anda
      setAudio(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    getAllDataudio();
  }, []);

  const convertBufferToAudio = (buffer) => {
    // Konversi buffer ke Uint8Array
    const byteArray = new Uint8Array(buffer.data);
    // console.log(byteArray);
    // Buat Blob dari Uint8Array
    const blob = new Blob([byteArray], { type: "audio/mpeg" });

    // Buat URL dari Blob
    return URL.createObjectURL(blob);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-10">
      <div className="">
        <h1 className="title">Audio</h1>
        <h2 className="subtitle">List Of Audio</h2>
      </div>
      <div className="w-full h-auto flex flex-col gap-5">
        <Link to={"/addaudio"}>
          <button className="mr-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Add New
          </button>
        </Link>
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Audio Name</th>
              <th className="py-3 px-6">Keterangan Audio</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 ">
            {getAudio.map((audio, index) => (
              <tr
                key={audio.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">
                  <audio controls>
                    <source
                      src={convertBufferToAudio(audio.audio_name_input)}
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </td>
                <td className="py-3 px-6 text-left">
                  {audio.keterangan_audio}
                </td>
                <td className="flex gap-2 mt-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
