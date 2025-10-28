import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { registerUser } from "../api";

const schema = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Please confirm your password"),
});

function Register() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState()
  // const [form, setForm] = useState({fullName:"", email:"", password:"", confirmPassword:""})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getInputData = (e) => {
    console.log(e.target.value)
    // setForm({...form,[e.target.name]: e.target.value})
    // console.log(form);
  }

  const onSubmit = async (formData) => {
    console.log(formData)
    setLoading(true)

    try {
      const apiResult = registerUser(formData);
      setMessage("Registration successful!")
      setMessageStatus(true)
      console.log("Server response:", apiResult) 
    } catch (error) {
      setMessage("Registration failed. Try again")
      setMessageStatus(false)
    } finally {
      setLoading(false)
    }
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
              name="fullname"
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
              name="email"
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
              name="password"
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
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 font-light">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-primary text-white rounded-md w-full font-medium py-2"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <div className="text-center">
            <p className={`text-sm ${messageStatus ? "text-green-400" : "text-red-400"}`}>{message}</p>
          </div>
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
