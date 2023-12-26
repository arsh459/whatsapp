import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpSchema } from "../../utils/validation.js"
import AuthInput from "./AuthInput.jsx"
import { useDispatch, useSelector } from "react-redux"
import { PulseLoader } from "react-spinners"
import { Link, useNavigate } from "react-router-dom"
import { changeStatus, registerUser } from "../../features/userSlice.js"
import Picture from "./Picture.jsx"
import axios from "axios"
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET
const cloud_name = process.env.REACT_APP_CLOUD_NAME

export default function RegisterForm() {
  const { status, error } = useSelector((store) => {
    return store.user
  })
  const [picture, setPicture] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  })
  const onSubmit = async (data) => {
    dispatch(changeStatus("loading"))
    let res
    if (picture) {
      await uploadImage().then(async (pic) => {
        res = await dispatch(registerUser({ ...data, picture: pic.secure_url }))
      })
    } else {
      res = await dispatch(registerUser({ ...data, picture: "" }))
    }
    if (res.payload.user) {
      navigate("/")
    }
  }
  const uploadImage = async () => {
    let formData = new FormData()
    formData.append("upload_preset", cloud_secret)
    formData.append("file", picture)
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    )
    console.log(data)
    return data
  }

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/* Heading */}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign Up</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Name"
            register={register}
            error={errors?.name?.message}
          />
          <AuthInput
            name="email"
            type="email"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="status"
            type="text"
            placeholder="Status (Optional)"
            register={register}
            error={errors?.status?.message}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />

          {/* Picture */}
          <Picture setPicture={setPicture} picture={picture} />

          {/* Error */}
          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            <></>
          )}
          {/* Submit Button */}
          <button
            className="w-full justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {status == "loading" ? (
              <PulseLoader color="#fff" size={16} />
            ) : (
              "Sign Up"
            )}
          </button>

          {/* Sign in link */}

          <p className="flex flex-col items-center justify-center m-1 text-center text-md dark:text-dark_text_1">
            <span>Have an account</span>
            <Link
              to="/login"
              className="dark:text-blue-500 hover:underline cursor-pointer transition ease-in duration-100"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
