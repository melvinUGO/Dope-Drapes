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
import { loginSchema } from "@/types";

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
});

const AccountloginPage = () => {
  const { saveUser } = useGlobalUserContext();
  const [error, setError] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (data: loginSchema) => {
    setError(false);

    try {
      const res = await axios.post("/api/account/login", data);
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
        <HeadingOne text={"LOGIN"} />
        <form onSubmit={handleSubmit(handleLogin)}>
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

          <p>
            {" "}
            <a href="/forgot-password" className="tsm:text-right block ">
              Forgot your password?
            </a>
          </p>
          {error && <p className="text-red-500">Invalid credentials</p>}
          <div className="py-5">
            <button
              type="submit"
              className=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-auto"
            >
              SIGN IN
            </button>
            <Link
              href={"/account/register"}
              type="submit"
              className=" p-3 px-4 text-black text-center hover:text-[#6e6e6e] font-light  block w-full sm:inline sm:w-auto "
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountloginPage;
