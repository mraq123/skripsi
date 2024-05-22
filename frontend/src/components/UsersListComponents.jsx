import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersListComponents = () => {
  const [getUsers, setGetUsers] = useState();

  // get data
  const userList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setGetUsers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    userList();
  }, []);

  // delete button
  const deleteProduct = async (userId) => {
    const isConfirmed = window.confirm("Apakah kamu ingin menghapus user?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        userList();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
  return (
    <div className="w-full h-auto flex flex-col gap-10">
      <div className="">
        <h1 className="title">Users</h1>
        <h2 className="subtitle">List Of Users</h2>
      </div>
      <div className="w-full h-auto flex flex-col gap-5">
        <Link to={"/addusers"}>
          <button className="mr-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Add New
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
            {getUsers &&
              getUsers.map((user, i) => {
                return (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-50"
                    key={user.id}
                  >
                    <td className="py-3 px-6 text-left">{i + 1}</td>
                    <td className="py-3 px-6 text-left">{user.username}</td>
                    <td className="py-3 px-6 text-left">{user.email}</td>
                    <td className="py-3 px-6 text-left">{user.role}</td>
                    <td className="flex gap-2 mt-2">
                      <Link to={`/editusers/${user.id}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                        onClick={() => deleteProduct(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersListComponents;
