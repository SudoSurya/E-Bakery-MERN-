import AdminHomepage from "./Admin/AdminHomepage.";
import AdminLogin from "./Admin/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminProducts from "./Admin/AdminProducts";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminHomepage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
