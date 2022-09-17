import { LockClosedIcon } from "@heroicons/react/20/solid";
import DialogBox from "./DialogBox";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
export default function NewProduct() {
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/newproduct", data)
      .then((res) => setModal(true));
  };

  return (
    <div>
      <AdminHeader>
        <>
          <Link
            to="/admin/products"
            className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
          >
            View Products
          </Link>
          <Link
            to="/admin/login"
            className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
          >
            Manage Orders
          </Link>
          <Link
            to="/admin/login"
            className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
          >
            Logout
          </Link>
        </>
      </AdminHeader>
      <div className="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto rounded-full"
              alt="Your Company"
              src="https://img.freepik.com/free-vector/bakery-logo-food-business-template-branding-design-vector_53876-136255.jpg?w=740&t=st=1663168197~exp=1663168797~hmac=ca71bca5ff96efb9e962db802acd581ac714f9595ffffe92239f714581e94ace"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Add New Product
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="P_name" className="sr-only">
                  Product Name
                </label>
                <input
                  id="P_name"
                  type="text"
                  required
                  autoComplete="off"
                  className="relative block w-full appearance-none border border-gray-300 px-8 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product Name"
                  {...register("P_name", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="P_category" className="sr-only">
                  Product category
                </label>
                <input
                  id="P_category"
                  type="text"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-8 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product category"
                  {...register("P_category", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="P_price" className="sr-only">
                  Product Price
                </label>
                <input
                  id="P_price"
                  type="number"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-8 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product Price"
                  {...register("P_price", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="P_image" className="sr-only">
                  Product Image
                </label>
                <input
                  id="P_image"
                  type="url"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-8 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product Image(url)"
                  {...register("P_image", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="P_stock" className="sr-only">
                  Product Stock
                </label>
                <input
                  id="P_stock"
                  type="number"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-8 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product Stock"
                  {...register("P_stock", { required: true })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Add new Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <>{modal && <DialogBox setModal={setModal} />}</>
    </div>
  );
}
