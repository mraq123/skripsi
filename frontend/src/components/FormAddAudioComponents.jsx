import { Link } from "react-router-dom";

const FormAddAudioComponents = () => {
  return (
    <div className="w-full h-auto flex flex-col ">
      <div className="w-full h-auto">
        <div className="title">ADD AUDIO</div>
      </div>

      <div className="w-1/4 h-auto flex flex-col gap-2 mt-5">
        <form>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Audio Name</h2>
            <input
              type="file"
              name=""
              id=""
              className="shadow-lg  h-8 border-current	"
            />
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <h2 className="font-bold">Keterangan Audio</h2>
            <input
              type="text"
              name=""
              id=""
              className="shadow-lg rounded h-8 border-current	rounded-lg"
              placeholder="Masukkan Keterangan ..."
            />
          </div>

          <div className="flex gap-2 mt-5 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              type="submit"
            >
              Save
            </button>
            <Link to={"/audio"}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddAudioComponents;
