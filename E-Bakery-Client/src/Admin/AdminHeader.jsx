import { Link } from "react-router-dom";

export default function AdminHeader({ children }) {
  return (
    <>
      <div className="bg-slate-800 flex p-4 justify-between items-center">
        <Link
          to="/admin"
          className="text-gray-50 text-2xl font-roboto cursor-pointer"
        >
          Admin Portal
        </Link>
        <div>{children}</div>
      </div>
    </>
  );
}
