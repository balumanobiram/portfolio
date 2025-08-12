// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { AddBankAccountForm } from "./pages/AddBankAccount";
import  AddCreditCardForm  from "./pages/AddCreditCard";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all pages with Navbar
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/addbank", element: <AddBankAccountForm /> },
      { path: "/addcredit", element: <AddCreditCardForm /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
