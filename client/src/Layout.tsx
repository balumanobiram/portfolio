// components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
const Layout: React.FC = () => {
  const location = useLocation();
  const excludedRoutes = ["/", "/login", "/signup"];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
