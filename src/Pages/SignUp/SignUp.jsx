import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const handleSignup = (data) => {
    setSignUpError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User create successfully");
        updateUser(data.name)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-[385px]  mx-auto lg:mt-4 p-7 shadow-lg">
      <h2 className="text-center text-xl mb-9">Sign Up</h2>
      <form onSubmit={handleSubmit(handleSignup)}>
        <label className="text-sm pl-1 font-semibold">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name required" })}
          className="input input-bordered w-full mb-3"
        />
        {errors.name && (
          <p className="text-red-600 font-semibold pl-1 -mt-2 text-sm mb-3">
            {errors.name?.message}
          </p>
        )}
        <label className="text-sm pl-1 font-semibold">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address",
            },
          })}
          className="input input-bordered w-full mb-3"
        />
        {errors.email && (
          <p className="text-red-600 font-semibold pl-1 -mt-2 text-sm mb-3">
            {errors.email?.message}
          </p>
        )}
        <label className="text-sm pl-1 font-semibold">Password</label>
        <input
          type="text"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be  8 charecters or longer",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
              message:
                "Password must have uppercase, number and special characters",
            },
          })}
          className="input input-bordered w-full mb-1"
        />
        {errors.password && (
          <p className="text-red-600 font-semibold pl-1 mt-1 text-sm ">
            {errors.password?.message}
          </p>
        )}
        <p>{signUpError}</p>

        <button className="w-full py-3 bg-accent text-white mt-5 uppercase rounded-md mb-2">
          Sign Up
        </button>
        <p className="text-center">
          Already Have an account?{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="divider mt-5">OR</div>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-3 border-2 border-accent text-accent rounded-md mt-2"
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SignUp;
