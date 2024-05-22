"use client";

import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const page = () => {
  const schemaState = yup.object({
    email: yup.string().email().required("Please enter your Email Address"),
    password: yup.string().required("Please enter your Password"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaState),
  });

  const handleSubmission = handleSubmit(async (res) => {
    const url: string = "http://localhost:4455/api/view-all-account/";

    // console.log(url);
    // const data = await fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(res),
    // });

    // const result = data.json();
    // console.log(result);
    // console.log(data);

    await axios.get(url).then((res) => {
      console.log(res);
    });
    // reset();
  });

  return (
    <div className="w-full flex items-center justify-center h-[100vh]">
      <form
        onSubmit={handleSubmission}
        className="w-[500px] min-h-[200px] border rounded-md m-4 p-4"
      >
        <div className="my-3">
          <label className="text-[12px]">Email</label>
          <input
            className="w-full border rounded-md h-12 px-2 placeholder:text-[12px] outline-none"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          <p className="text-[12px] text-red-400 flex justify-end w-full mt-1  ">
            {errors?.email && errors?.email?.message}
          </p>
        </div>
        <div className="my-3">
          <label className="text-[12px]">Password</label>
          <input
            className="w-full border rounded-md h-12 px-2 placeholder:text-[12px] outline-none"
            placeholder="Enter Your Password"
            {...register("password")}
          />
          <p className="text-[12px] text-red-400 flex justify-end w-full mt-1  ">
            {errors?.password && errors?.password?.message}
          </p>
        </div>

        <div className="flex justify-center items-center w-full text-white bg-red-500 py-3 rounded-md mt-10">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default page;
