import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminProducts() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <AdminHeader>
        <>
          <Link
            to="/admin/newproduct"
            className="text-gray-50 text-2xl font-roboto cursor-pointer px-5 hover:bg-zinc-600 hover:rounded-lg py-1"
          >
            Add Products
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
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products ? (
              products.map((product) => (
                <a key={product._id} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.P_image}
                      // alt={product.imageAlt}
                      className="h-96 w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.P_name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.P_price}
                  </p>
                </a>
              ))
            ) : (
              <div>....loading</div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
