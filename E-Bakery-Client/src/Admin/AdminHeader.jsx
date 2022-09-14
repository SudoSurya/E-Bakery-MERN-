import AdminHomepage from "./AdminHomepage.";

export default function AdminHeader() {
  return (
    <>
      <div className="bg-slate-800 flex p-4 justify-between items-center">
        <div className="text-gray-50 text-2xl font-roboto cursor-pointer">
          Admin Portal
        </div>
        <div className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1">
          Login
        </div>
      </div>

      <AdminHomepage />
    </>
  );
}
