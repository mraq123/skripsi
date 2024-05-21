import { Link } from "react-router-dom";

const FormEditUsersComponents = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col ">
        <div className="w-full h-auto">
          <div className="title">EDIT USERS</div>
        </div>

        <div className="w-1/4 h-auto flex flex-col gap-2 mt-5">
          <form>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">UserName</h2>
              <input
                type="text"
                name=""
                id=""
                className="shadow-lg rounded h-8 border-current rounded-lg"
                placeholder="Masukkan Username ..."
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <h2 className="font-bold">Email</h2>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Masukkan email ..."
                className="shadow-lg rounded h-8 border-current	rounded-lg	"
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <h2 className="font-bold">Password</h2>
              <input
                type="password"
                name=""
                id=""
                className="shadow-lg rounded h-8 border-current	rounded-lg"
                placeholder="Masukkan Password ..."
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <h2 className="font-bold">Confirm Password</h2>
              <input
                type="password"
                name=""
                id=""
                className="shadow-lg rounded h-8 border-current	rounded-lg"
                placeholder="Ulangi Password ..."
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <h2 className="font-bold">Role</h2>
              <select className="shadow-lg rounded h-8 border-current	rounded-lg">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="flex gap-2 mt-5 ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                type="submit"
              >
                Update
              </button>
              <Link to={"/users"}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditUsersComponents;
