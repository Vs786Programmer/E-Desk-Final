import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import brandlogo from "../assets/Brandlogo.png";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex  items-center justify-center bg-blue-50/50">
      <div className="w-full max-w-md bg-white p-5 sm:p-7 sm:pt-2 rounded-3xl shadow-2xl justify-start items-center">
        <div className="flex flex-col items-start mb-10 justify-center ">
          <img className="w-40 m-auto my-1.5" src={brandlogo} alt="brandlogo" />
          <h1 className="text-3xl font-bold text-gray-900 flex items-center w-full justify-center my-0.5">
            Welcome Back <span className="ml-2 text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 mt-1 text-center w-full">
            Let's explore our app again with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-4 rounded-lg">
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
            Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full  bg-white px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-00"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="regular-button w-full my-5">
              Submit
            </button>
          </div>
        </form>
        <div className="text-center mt-12 text-sm">
          <span className="text-gray-600">Don't have an account? </span>

          <span className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Register here
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
