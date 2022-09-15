import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <>
      <div>
        <AdminHeader>
          <div className="flex">
            <Link
              to="/adminlogin"
              className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
            >
              View Products
            </Link>
            <Link
              to="/adminlogin"
              className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
            >
              Logout
            </Link>
          </div>
        </AdminHeader>
      </div>

      <>
        <h1 className="text-4xl text-center font-bold tracking-tight my-10 font-roboto text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">E-Bakery </span>{" "}
          <span className="block text-indigo-600 xl:inline">
            Admin Dashboard
          </span>
        </h1>
      </>

      <div className="flex justify-center space-x-4">
        <div className="w-96 shadow-lg hover:shadow-2xl p-2 hover:bg-gray-300 cursor-pointer">
          <img
            src="http://source.unsplash.com/1800x900?bakery"
            className="w-full object-fill p-2"
          />
          <h1 className="text-slate-600 font-bold text-center text-xl my-2">
            View Products
          </h1>
        </div>
        <div className="w-96 shadow-lg hover:shadow-2xl p-2 hover:bg-gray-300 cursor-pointer">
          <img
            src="http://source.unsplash.com/1800x900?items"
            className="w-full object-fill p-2"
          />
          <h1 className="text-slate-600 font-bold text-center text-xl my-2">
            Add New Products
          </h1>
        </div>
        <div className="w-96 shadow-lg hover:shadow-2xl p-2 hover:bg-gray-300 cursor-pointer">
          <img
            src="http://source.unsplash.com/1800x900?manage"
            className="w-full object-fill p-2"
          />
          <h1 className="text-slate-600 font-bold text-center text-xl my-2">
            Manage Orders
          </h1>
        </div>
      </div>
    </>
  );
}
