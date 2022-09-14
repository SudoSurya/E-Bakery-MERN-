import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <>
      <div className="bg-slate-800 flex p-4 justify-between items-center">
        <Link
          to="/admin"
          className="text-gray-50 text-2xl font-roboto cursor-pointer"
        >
          Admin Portal
        </Link>
        <Link
          to="/adminlogin"
          className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
        >
          Login
        </Link>
      </div>
    </>
  );
}
