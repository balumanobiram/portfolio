import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/check-session", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.logged_in);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return isLoggedIn ? children : <Navigate to="/login" />;
}
