import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try {
      const response = await loginUser(data)
  
      if (response?.status === "success") {
        toast.success("Login successful")
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        reset()
        navigate("/dashboard");
      } else {
        toast.error(response?.message || "Login failed")
      }
    } catch (error) {
      toast.error("Invalid email or password")
      console.error("Login error:", error)
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-8 rounded-lg border border-gray-300 text-center p-6 bg-white max-w-md w-full space-y-5 shadow-md">
        <h3 className="text-2xl font-bold">Welcome Back</h3>
        <p className="text-gray-600 font-medium">
          Sign in to continue tracking your streaks
        </p>
        <form className="text-left space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Email</label>
            <input
              {...register("email")}
              className="border h-10 border-gray-300 rounded-md p-4"
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 font-light">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input
              {...register("password")}
              className="border h-10 border-gray-300 rounded-md p-4 hover:border-primary   active:outline-none"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-500 font-light">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-md w-full font-medium py-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-600 font-medium">
          Don't have an account?
          <Link to="/register" className="text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
