"use client";
import HeadingOne from "@/components/HeadingOne";
import { useGlobalUserContext } from "@/contexts/userContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerSchema } from "@/types";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const AccountRegisterPage = () => {
  const [error, setError] = useState(false);
  const { saveUser } = useGlobalUserContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = async (data: registerSchema) => {
    setError(false);

    try {
      const res = await axios.post("/api/account/register", data);
      const user = res.data;

      saveUser(user.id, user.token);
    } catch (error) {
      setError(true);
    }

    router.push("/account");
  };
  return (
    <>
      <div className="container max-w-[600px] mx-auto p-[20px]">
        <HeadingOne text={"REGISTER"} />
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className=" sm:flex items-center gap-5">
            <div className="w-full">
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                required
                type="text"
                className="w-full p-3 border border-[#21212180] my-1"
                id="firstName"
                {...register("firstName")}
              />
              {errors.firstName && (
                <small className="auth-error">{errors.firstName.message}</small>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                required
                type="text"
                className="w-full p-3 border border-[#21212180] my-1"
                id="lastName"
                {...register("lastName")}
              />
              {errors.lastName && (
                <small className="auth-error">{errors.lastName.message}</small>
              )}
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            required
            type="email"
            className="w-full p-3 border border-[#21212180] my-1"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <small className="auth-error">{errors.email.message}</small>
          )}

          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            required
            className="w-full p-3 border border-[#21212180] my-1"
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <small className="auth-error">{errors.password.message}</small>
          )}

          {error && (
            <p className="text-red-500">
              An error occured while registering user
            </p>
          )}
          <div className="py-5">
            <button
              type="submit"
              className=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-auto"
            >
              SIGN IN
            </button>
            <Link
              href={"/"}
              type="submit"
              className=" p-3 px-4 text-black text-center hover:text-[#6e6e6e] font-light  block w-full sm:inline sm:w-auto "
            >
              RETURN TO STORE
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountRegisterPage;
