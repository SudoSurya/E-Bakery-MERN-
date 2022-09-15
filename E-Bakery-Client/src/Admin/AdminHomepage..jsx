import { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import RegisterModal from "./RegisterModal";

export default function AdminHomepage() {
  const [setRegModal, OpenRegModal] = useState(false);

  function closeModal1() {
    OpenRegModal(false);
  }
  return (
    <div>
      <AdminHeader>
        <Link
          to="/admin/login"
          className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
        >
          Login
        </Link>
      </AdminHeader>
      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">E-Bakery online business</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              Admin Portal
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/admin/login"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                Login
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                onClick={() => OpenRegModal(true)}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </main>
      {setRegModal && <RegisterModal closeModal1={closeModal1} />}
    </div>
  );
}
