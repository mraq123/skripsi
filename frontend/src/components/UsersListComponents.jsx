import { Link } from "react-router-dom";

const UsersListComponents = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10">
      <div className="">
        <h1 className="title">Users</h1>
        <h2 className="subtitle">List Of Users</h2>
      </div>
      <div className="w-full h-auto flex flex-col gap-5">
        <Link to={"/addusers"}>
          <button className="mr-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Add
          </button>{" "}
        </Link>
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">UserName</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 ">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 text-left">1</td>
              <td className="py-3 px-6 text-left">Rafi</td>
              <td className="py-3 px-6 text-left">rfi@gmail</td>
              <td className="py-3 px-6 text-left">admin</td>
              <td className="flex gap-2 mt-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersListComponents;
