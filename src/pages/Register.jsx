import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Please confirm your password"),
});

const BASE_URL = import.meta.env.VITE_STREAKTRACKER_API_BASE_URL;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-8 rounded-lg border border-gray-300 text-center p-6 bg-white max-w-md w-full space-y-5 shadow-md">
        <h3 className="text-2xl font-bold">Welcome Back</h3>
        <p className="text-gray-600 font-medium">
          Sign in to continue tracking your streaks
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Full Name</label>
            <input
              {...register("fullname")}
              className="border h-10 border-gray-300 rounded-md p-4"
              type="text"
              placeholder="John Doe"
            />
            {errors.fullname && (
              <p className="text-sm text-red-500 font-light">
                {errors.fullname.message}
              </p>
            )}
          </div>
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
            <label className="font-semibold">Enter Password</label>
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
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              className="border h-10 border-gray-300 rounded-md p-4 hover:border-primary   active:outline-none"
              type="password"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 font-light">
                {errors.confirmPassword.message}
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
          <Link to="/login" className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
