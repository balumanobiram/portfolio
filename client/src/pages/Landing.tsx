import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My App</h1>
      <p>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
